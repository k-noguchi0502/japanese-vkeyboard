"use client"

/* @jsx-mode client */

import React from "react"
import { useState, useCallback, useMemo, useEffect } from "react"
import { useTheme } from "next-themes"
import styles from "./styles/virtual-keyboard.module.css"
import HiraganaKeyboard from "./components/HiraganaKeyboard"
import TenkeyKeyboard from "./components/TenkeyKeyboard"
import DeleteIcon from "./components/DeleteIcon"
import type { KeyboardType } from "./utils/types"
import { dakutenMap, handakutenMap, hiraganaLayout, tenkeyLayout } from "./utils/constants"
import { fetchCandidates } from "./utils/utils"

export { dakutenMap, handakutenMap, hiraganaLayout, tenkeyLayout, fetchCandidates }

export interface VKeyboardProps {
  value: string
  onChange: (value: string) => void
  keyboardType?: KeyboardType
  enableConversion?: boolean
  className?: string
  placeholder?: string
  maxLength?: number
  disabled?: boolean
  autoFocus?: boolean
  onFocus?: () => void
  onBlur?: () => void
  inputMode?: "text" | "search"
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void
}

const VKeyboard: React.FC<VKeyboardProps> = ({
  value,
  onChange,
  keyboardType = "hirakey",
  enableConversion = true,
  className = "",
  placeholder = "",
  maxLength,
  disabled = false,
  autoFocus = false,
  onFocus,
  onBlur,
  inputMode = "text",
  onKeyDown,
}) => {
  const [inputText, setInputText] = useState("")
  const [isFocused, setIsFocused] = useState(autoFocus)
  // const [showSmallCharacters, setShowSmallCharacters] = useState(false) // Removed
  const { theme } = useTheme()

  const handleKeyPress = useCallback(
    (key: string) => {
      if (disabled) return

      let newValue = value
      let newInputText = inputText

      if (keyboardType === "hirakey") {
        switch (key) {
          case "delete":
            if (inputText.length > 0) {
              newInputText = inputText.slice(0, -1)
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
          newValue = value.slice(0, -1)
        } else if (key !== "確定") {
          newValue += key
        }
      }

      setInputText(newInputText)
      onChange(maxLength ? newValue.slice(0, maxLength) : newValue)
    },
    [onChange, inputText, value, keyboardType, disabled, maxLength],
  )

  const handleCandidateSelect = useCallback(
    (candidate: string) => {
      if (disabled) return
      const newValue = value + candidate
      onChange(maxLength ? newValue.slice(0, maxLength) : newValue)
      setInputText("")
    },
    [value, onChange, disabled, maxLength],
  )

  const handleFocus = useCallback(() => {
    if (!disabled) {
      setIsFocused(true)
      onFocus?.()
    }
  }, [disabled, onFocus])

  const handleBlur = useCallback(() => {
    setIsFocused(false)
    onBlur?.()
  }, [onBlur])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      onKeyDown?.(e)
    },
    [onKeyDown],
  )

  const renderKey = useCallback((key: string | JSX.Element | null): React.ReactNode => {
    if (key === "delete") {
      return <DeleteIcon />
    }
    return key
  }, [])

  const keyboardProps = useMemo(
    () => ({
      inputText,
      setInputText,
      onKeyPress: handleKeyPress,
      enableConversion,
      confirmedText: value,
      onCandidateSelect: handleCandidateSelect,
      disabled,
      renderKey,
      theme,
      inputMode,
      // showSmallCharacters, // Removed
      // setShowSmallCharacters, // Removed
    }),
    [
      inputText,
      handleKeyPress,
      enableConversion,
      value,
      handleCandidateSelect,
      disabled,
      renderKey,
      theme,
      inputMode,
      // showSmallCharacters, // Removed
      // setShowSmallCharacters, // Removed
    ],
  )

  useEffect(() => {
    // テーマが変更されたときに再レンダリングをトリガー
  }, [])

  return (
    <div
      className={`${styles.container} ${className} ${disabled ? styles.disabled : ""} ${
        theme === "dark" ? styles.dark : ""
      }`}
      tabIndex={disabled ? -1 : 0}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    >
      <div className={styles.keyboardWrapper}>
        {keyboardType === "hirakey" ? (
          <HiraganaKeyboard
            {...keyboardProps}
            // showSmallCharacters={showSmallCharacters} // Removed
            // setShowSmallCharacters={setShowSmallCharacters} // Removed
          />
        ) : (
          <TenkeyKeyboard
            onKeyPress={handleKeyPress}
            disabled={disabled}
            renderKey={renderKey}
            theme={theme}
            inputMode={inputMode}
          />
        )}
      </div>
    </div>
  )
}

export default VKeyboard

