"use client"

/* @jsx-mode client */

import React, { useState, useCallback, useEffect, useMemo } from "react"
import styles from "../styles/virtual-keyboard.module.css"
import { dakutenMap, handakutenMap, hiraganaLayout } from "../utils/constants"
import { fetchCandidates } from "../utils/utils"

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
}) => {
  const [activeKey, setActiveKey] = useState<string | null>(null)
  const [candidates, setCandidates] = useState<string[]>([])
  const [showCandidates, setShowCandidates] = useState(false)
  const [canApplyDakuten, setCanApplyDakuten] = useState(false)
  const [canApplyHandakuten, setCanApplyHandakuten] = useState(false)

  const combineCharacters = useCallback((text: string): string => {
    return text.replace(/(.)([゛゜])/g, (_, char, diacritic) => {
      if (diacritic === "゛" && char in dakutenMap) {
        return dakutenMap[char as keyof typeof dakutenMap]
      } else if (diacritic === "゜" && char in handakutenMap) {
        return handakutenMap[char as keyof typeof handakutenMap]
      }
      return char + diacritic
    })
  }, [])

  const handleKeyPress = useCallback(
    (key: string | JSX.Element) => {
      if (disabled) return

      setActiveKey(typeof key === "string" ? key : "delete")
      let newInputText = inputText

      if (typeof key === "string") {
        if (key === "゛" || key === "゜") {
          if (newInputText.length > 0) {
            const lastChar = newInputText.slice(-1)
            if (lastChar in dakutenMap || lastChar in handakutenMap) {
              let newChar = lastChar
              if (key === "゛") {
                newChar = dakutenMap[lastChar as keyof typeof dakutenMap]
              } else if (key === "゜") {
                newChar = handakutenMap[lastChar as keyof typeof handakutenMap]
              }
              newInputText = newInputText.slice(0, -1) + newChar
            }
          }
        } else if (key === "delete") {
          newInputText = newInputText.slice(0, -1)
        } else if (key === "確定") {
          onKeyPress("確定")
          onCandidateSelect(combineCharacters(newInputText))
          newInputText = ""
        } else if (key !== "delete" && key !== "確定") {
          newInputText += key
        }
      } else if (React.isValidElement(key)) {
        newInputText = newInputText.slice(0, -1)
      }
      setInputText(newInputText)
      onKeyPress(typeof key === "string" ? key : "delete")
      setTimeout(() => setActiveKey(null), 100)
    },
    [inputText, setInputText, onKeyPress, onCandidateSelect, combineCharacters, disabled],
  )

  const handleCandidateSelect = useCallback(
    (candidate: string) => {
      if (disabled) return

      const combinedCandidate = combineCharacters(candidate)
      onCandidateSelect(combinedCandidate)
      setInputText("")
      setShowCandidates(false)
    },
    [combineCharacters, onCandidateSelect, setInputText, disabled],
  )

  useEffect(() => {
    if (inputText.length > 0 && enableConversion && !disabled) {
      fetchCandidates(combineCharacters(inputText)).then((data) => {
        if (data && data.length > 0) {
          setCandidates(data)
          setShowCandidates(true)
        } else {
          setShowCandidates(false)
        }
      })
    } else {
      setShowCandidates(false)
    }
  }, [inputText, enableConversion, combineCharacters, disabled])

  useEffect(() => {
    if (inputText.length > 0) {
      const lastChar = inputText.slice(-1)
      setCanApplyDakuten(lastChar in dakutenMap)
      setCanApplyHandakuten(lastChar in handakutenMap)
    } else {
      setCanApplyDakuten(false)
      setCanApplyHandakuten(false)
    }
  }, [inputText])

  const keyboardContent = useMemo(
    () => (
      <div className={`${styles.keyboard} ${styles.hirakey} ${theme === "dark" ? styles.dark : ""}`}>
        {hiraganaLayout.map((column, columnIndex) => (
          <div key={`column-${columnIndex}`} className={styles.column}>
            {column.map((key, keyIndex) => {
              const isDakuten = key === "゛"
              const isHandakuten = key === "゜"
              const isNull = key === null
              const isDisabled =
                disabled || isNull || (isDakuten && !canApplyDakuten) || (isHandakuten && !canApplyHandakuten)
              return (
                <button
                  key={`${columnIndex}-${keyIndex}-${key || "empty"}`}
                  className={`${styles.key} ${styles.autoResizeFont} ${
                    key === "delete" ? styles.deleteKey : key === "確定" ? styles.confirmKey : ""
                  } ${isNull ? styles.nullKey : ""} ${isDisabled ? styles.disabledKey : ""}`}
                  onClick={() => !isDisabled && key !== null && handleKeyPress(key)}
                  disabled={isDisabled}
                >
                  {isNull ? "" : renderKey(key)}
                </button>
              )
            })}
          </div>
        ))}
      </div>
    ),
    [handleKeyPress, disabled, renderKey, theme, canApplyDakuten, canApplyHandakuten],
  )

  return (
    <>
      {enableConversion && (
        <div className={`${styles.inputArea} ${theme === "dark" ? styles.dark : ""}`}>
          <div className={styles.displayArea}>
            <div className={styles.inputText}>{combineCharacters(inputText)}</div>
          </div>
          <div className={`${styles.candidateArea} ${enableConversion ? styles.enabled : styles.disabled}`}>
            {showCandidates && candidates.length > 0 ? (
              <div className={styles.candidateList}>
                {candidates.map((candidate, index) => (
                  <button
                    key={index}
                    className={styles.candidateItem}
                    onClick={() => handleCandidateSelect(candidate)}
                    disabled={disabled}
                  >
                    {candidate}
                  </button>
                ))}
              </div>
            ) : (
              <div className={styles.placeholderText}>変換候補がここに表示されます</div>
            )}
          </div>
        </div>
      )}
      {keyboardContent}
    </>
  )
}

export default React.memo(HiraganaKeyboard)

