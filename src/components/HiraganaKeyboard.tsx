import React, { useState, useCallback, useEffect, useMemo } from "react"
import styles from "../styles/virtual-keyboard.module.css"
import {
  dakutenMap,
  handakutenMap,
  hiraganaLayout,
  katakanaLayout,
  alphabetLayout,
  smallalphabetLayout,
  komojiMap,
} from "../utils/constants"
import { fetchCandidates } from "../utils/utils"
import type { KanaMode, AlphabetCase } from "../utils/types"
import { useKeyboardNavigation } from "../hooks/useKeyboardNavigation"
import { useDiacriticState } from "../hooks/useDiacriticState"
import DraggableScroll from "./DraggableScroll"

interface HiraganaKeyboardProps {
  inputText: string
  setInputText: React.Dispatch<React.SetStateAction<string>>
  onKeyPress: (key: string) => void
  enableConversion: boolean
  confirmedText: string
  onCandidateSelect: (text: string) => void
  disabled: boolean
  renderKey: (key: string | JSX.Element | null) => React.ReactNode
  theme: string | undefined
  kanaMode: KanaMode
  setKanaMode: React.Dispatch<React.SetStateAction<KanaMode>>
  alphabetCase: AlphabetCase
  setAlphabetCase: React.Dispatch<React.SetStateAction<AlphabetCase>>
}

const HiraganaKeyboard: React.FC<HiraganaKeyboardProps> = ({
  inputText,
  setInputText,
  onKeyPress,
  enableConversion,
  confirmedText,
  onCandidateSelect,
  disabled,
  renderKey,
  theme,
  kanaMode,
  setKanaMode,
  alphabetCase,
  setAlphabetCase,
}) => {
  const [activeKey, setActiveKey] = useState<string | null>(null)
  const [candidates, setCandidates] = useState<string[]>([])
  const [showCandidates, setShowCandidates] = useState(false)

  const { canApplyDakuten, canApplyHandakuten, canApplyKomoji, updateDiacriticState } = useDiacriticState(inputText)

  const { focusedKey, handleKeyDown } = useKeyboardNavigation(
    kanaMode === "hiragana" ? hiraganaLayout : kanaMode === "katakana" ? katakanaLayout : alphabetLayout,
    onKeyPress,
  )

  const combineCharacters = useCallback((text: string): string => {
    return text.split("").reduce((acc, char, index, array) => {
      if (index > 0) {
        const prevChar = acc.slice(-1)
        if (char === "゛" && prevChar in dakutenMap) {
          return acc.slice(0, -1) + dakutenMap[prevChar as keyof typeof dakutenMap]
        } else if (char === "゜" && prevChar in handakutenMap) {
          return acc.slice(0, -1) + handakutenMap[prevChar as keyof typeof handakutenMap]
        } else if (char === "小" && prevChar in komojiMap) {
          return acc.slice(0, -1) + komojiMap[prevChar as keyof typeof komojiMap]
        }
      }
      return acc + char
    }, "")
  }, [])

  const handleKeyPress = useCallback(
    (key: string | JSX.Element) => {
      if (disabled) return

      setActiveKey(typeof key === "string" ? key : "delete")
      let newInputText = inputText
      if (typeof key === "string") {
        if (key === "カナ" || key === "かな" || key === "ABC") {
          setKanaMode(key === "カナ" ? "katakana" : key === "かな" ? "hiragana" : "alphabet")
          return
        } else if (key === "Aa") {
          setAlphabetCase((prev) => (prev === "upper" ? "lower" : "upper"))
          return
        } else if (kanaMode === "alphabet") {
          if (key !== "delete" && key !== "確定") {
            const newKey = alphabetCase === "upper" ? key.toUpperCase() : key.toLowerCase()
            onCandidateSelect(newKey)
          }
        } else if (key === "delete") {
          newInputText = newInputText.slice(0, -1)
        } else if (key === "確定") {
          onKeyPress("確定")
          const confirmedText = combineCharacters(inputText)
          onCandidateSelect(confirmedText)
          setInputText("")
          setCandidates([])
          setShowCandidates(false)
          return
        } else {
          newInputText += key
        }
      }

      const combinedText = combineCharacters(newInputText)
      setInputText(combinedText)
      onKeyPress(typeof key === "string" ? key : "delete")
      updateDiacriticState(combinedText)
      setTimeout(() => setActiveKey(null), 100)
    },
    [
      inputText,
      setInputText,
      onKeyPress,
      onCandidateSelect,
      disabled,
      setKanaMode,
      kanaMode,
      alphabetCase,
      setAlphabetCase,
      updateDiacriticState,
      combineCharacters,
    ],
  )

  const handleCandidateSelect = useCallback(
    (candidate: string) => {
      if (disabled) return
      console.log("選択された候補:", candidate)
      // 変換候補をそのまま使用し、combineCharacters関数を適用しない
      onCandidateSelect(candidate)
      setInputText("")
      setCandidates([])
      setShowCandidates(false)
    },
    [onCandidateSelect, setInputText, disabled],
  )

  useEffect(() => {
    if (inputText.length > 0 && enableConversion && !disabled && kanaMode !== "alphabet") {
      const combinedText = combineCharacters(inputText)
      fetchCandidates(combinedText).then((data) => {
        if (data && data.length > 0) {
          setCandidates(data)
          setShowCandidates(true)
        } else {
          setCandidates([combinedText])
          setShowCandidates(true)
        }
      })
    } else {
      setShowCandidates(false)
    }
  }, [inputText, enableConversion, combineCharacters, disabled, kanaMode])

  const keyboardContent = useMemo(() => {
    let currentLayout: (string | JSX.Element | null)[][]
    if (kanaMode === "hiragana") {
      currentLayout = hiraganaLayout
    } else if (kanaMode === "katakana") {
      currentLayout = katakanaLayout
    } else {
      currentLayout = alphabetCase === "upper" ? alphabetLayout : smallalphabetLayout
    }

    return (
      <div
        className={`${styles.keyboard} ${styles.hirakey} ${theme === "dark" ? styles.dark : ""}`}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="grid"
        aria-label="仮想キーボード"
      >
        {currentLayout.map((column, columnIndex) => (
          <div key={`column-${columnIndex}`} className={styles.column} role="row">
            {column.map((key, keyIndex) => {
              if (key === "゛゜") {
                return (
                  <div
                    key={`${columnIndex}-${keyIndex}-diacritics`}
                    className={`${styles.divkey} ${styles.diacriticsContainer}`}
                    role="gridcell"
                  >
                    <button
                      className={`${styles.diacriticKey} ${!canApplyDakuten ? styles.disabledDiacritic : ""}`}
                      onClick={() => !disabled && canApplyDakuten && handleKeyPress("゛")}
                      disabled={disabled || !canApplyDakuten}
                      aria-label="濁点"
                    >
                      ゛
                    </button>
                    <button
                      className={`${styles.diacriticKey} ${!canApplyHandakuten ? styles.disabledDiacritic : ""}`}
                      onClick={() => !disabled && canApplyHandakuten && handleKeyPress("゜")}
                      disabled={disabled || !canApplyHandakuten}
                      aria-label="半濁点"
                    >
                      ゜
                    </button>
                  </div>
                )
              } else if (key === "小") {
                return (
                  <button
                    key={`${columnIndex}-${keyIndex}-small`}
                    className={`${styles.key} ${styles.diacriticsKey} ${!canApplyKomoji ? styles.disabledDiacritic : ""}`}
                    onClick={() => !disabled && canApplyKomoji && handleKeyPress("小")}
                    disabled={disabled || !canApplyKomoji}
                    role="gridcell"
                    aria-label="小文字"
                  >
                    小
                  </button>
                )
              }
              const isNull = key === null
              const isKanaToggleButton = key === "カナ" || key === "かな" || key === "ABC"
              const isConfirmKey = key === "確定"
              const isAlphabetCaseToggle = key === "Aa"
              const isDisabled =
                disabled ||
                isNull ||
                (key === "゛" && !canApplyDakuten) ||
                (key === "゜" && !canApplyHandakuten) ||
                (key === "小" && !canApplyKomoji)
              return (
                <button
                  key={`${columnIndex}-${keyIndex}-${key || "empty"}`}
                  className={`${styles.key} ${styles.autoResizeFont} ${
                    key === "delete"
                      ? styles.deleteKey
                      : key === "確定"
                        ? styles.confirmKey
                        : isKanaToggleButton || isAlphabetCaseToggle
                          ? styles.functionKey
                          : ""
                  } ${isNull ? styles.nullKey : ""} ${isDisabled ? styles.disabledKey : ""} ${
                    focusedKey === `${columnIndex}-${keyIndex}` ? styles.focused : ""
                  }`}
                  onClick={() => !isDisabled && key !== null && handleKeyPress(key)}
                  disabled={isDisabled}
                  role="gridcell"
                  aria-label={typeof key === "string" ? key : ""}
                  tabIndex={focusedKey === `${columnIndex}-${keyIndex}` ? 0 : -1}
                >
                  {isNull ? "" : isAlphabetCaseToggle ? (alphabetCase === "upper" ? "Aa" : "aA") : renderKey(key)}
                </button>
              )
            })}
          </div>
        ))}
      </div>
    )
  }, [
    disabled,
    renderKey,
    theme,
    kanaMode,
    canApplyDakuten,
    canApplyHandakuten,
    canApplyKomoji,
    handleKeyPress,
    alphabetCase,
    focusedKey,
    handleKeyDown,
  ])

  return (
    <>
      <div className={`${styles.inputArea} ${theme === "dark" ? styles.dark : ""}`}>
        <div className={styles.displayArea}>
          <div className={styles.inputText} aria-live="polite">
            {combineCharacters(inputText)}
          </div>
        </div>
        {enableConversion && (
          <DraggableScroll className={`${styles.candidateArea} ${enableConversion ? styles.enabled : styles.disabled}`}>
            {showCandidates && candidates.length > 0 ? (
              <div className={styles.candidateList} role="listbox" aria-label="変換候補">
                {candidates.map((candidate, index) => (
                  <button
                    key={index}
                    className={styles.candidateItem}
                    onClick={() => handleCandidateSelect(candidate)}
                    disabled={disabled}
                    role="option"
                  >
                    {candidate}
                  </button>
                ))}
              </div>
            ) : (
              <div className={styles.placeholderText}>変換候補がここに表示されます</div>
            )}
          </DraggableScroll>
        )}
      </div>
      {keyboardContent}
    </>
  )
}

export default React.memo(HiraganaKeyboard)

