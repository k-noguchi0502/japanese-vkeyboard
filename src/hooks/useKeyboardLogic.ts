import { useState, useCallback, useRef, useEffect } from "react"
import type { KeyboardType, KanaMode } from "../utils/types"
import { fetchCandidates, combineCharacters } from "../utils/utils"

const DEBOUNCE_DELAY = 150 // ミリ秒に短縮

interface CacheItem {
  candidates: string[]
  timestamp: number
}

const CACHE_EXPIRATION = 5 * 60 * 1000 // 5分

export const useKeyboardLogic = (
  value: string,
  onChange: (value: string) => void,
  keyboardType: KeyboardType,
  kanaMode: KanaMode,
  maxLength?: number,
  disabled?: boolean,
) => {
  const [inputText, setInputText] = useState("")
  const [candidates, setCandidates] = useState<string[]>([])
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null)
  const candidateCacheRef = useRef<Map<string, CacheItem>>(new Map())

  const debouncedFetchCandidates = useCallback((text: string) => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current)
    }

    debounceTimerRef.current = setTimeout(async () => {
      try {
        const cachedItem = candidateCacheRef.current.get(text)
        if (cachedItem && Date.now() - cachedItem.timestamp < CACHE_EXPIRATION) {
          setCandidates(cachedItem.candidates)
        } else {
          const fetchedCandidates = (await Promise.race([
            fetchCandidates(text),
            new Promise<string[]>((_, reject) => setTimeout(() => reject(new Error("Fetch timeout")), 3000)),
          ])) as string[]
          setCandidates(fetchedCandidates)
          candidateCacheRef.current.set(text, { candidates: fetchedCandidates, timestamp: Date.now() })
        }
      } catch (error) {
        console.error("Failed to fetch candidates:", error)
        setCandidates([])
      }
    }, DEBOUNCE_DELAY)
  }, [])

  useEffect(() => {
    if (inputText && kanaMode !== "alphabet") {
      debouncedFetchCandidates(inputText)
    } else {
      setCandidates([])
    }

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current)
      }
    }
  }, [inputText, kanaMode, debouncedFetchCandidates])

  const handleKeyPress = useCallback(
    (key: string) => {
      if (disabled) return

      let newValue = value
      let newInputText = inputText

      if (keyboardType === "hirakey" && kanaMode === "alphabet") {
        if (key !== "delete" && key !== "確定") {
          newValue += key
          onChange(maxLength ? newValue.slice(0, maxLength) : newValue)
          return
        }
      }

      if (keyboardType === "hirakey") {
        switch (key) {
          case "delete":
            if (inputText.length > 0) {
              const combinedText = combineCharacters(inputText)
              newInputText = combinedText.slice(0, -1)
            } else if (value.length > 0) {
              newValue = value.slice(0, -1)
            }
            break
          case "確定":
            if (inputText) {
              newValue += inputText
              newInputText = ""
            }
            break
          default:
            if (key.length === 1) {
              newInputText += key
            } else {
              newValue += key
              newInputText = ""
            }
        }
      } else {
        if (key === "delete") {
          if (inputText.length > 0) {
            const combinedText = combineCharacters(inputText)
            newInputText = combinedText.slice(0, -1)
          } else {
            newValue = value.slice(0, -1)
          }
        } else if (key !== "確定") {
          newValue += key
        }
      }

      setInputText(newInputText)
      onChange(maxLength ? newValue.slice(0, maxLength) : newValue)

      // 予測変換の基盤: 入力パターンの記録
      if (key.length === 1 && kanaMode !== "alphabet") {
        const pattern = inputText + key
        if (pattern.length > 1) {
          const existingPatterns = localStorage.getItem("inputPatterns")
          const patterns = existingPatterns ? JSON.parse(existingPatterns) : {}
          patterns[pattern] = (patterns[pattern] || 0) + 1
          localStorage.setItem("inputPatterns", JSON.stringify(patterns))
        }
      }
    },
    [onChange, inputText, value, keyboardType, disabled, maxLength, kanaMode],
  )

  const handleCandidateSelect = useCallback(
    (candidate: string) => {
      if (disabled) return
      const newValue = value + candidate
      onChange(maxLength ? newValue.slice(0, maxLength) : newValue)
      setInputText("")
      setCandidates([])
    },
    [value, onChange, disabled, maxLength],
  )

  return {
    inputText,
    setInputText,
    handleKeyPress,
    handleCandidateSelect,
    candidates,
  }
}

