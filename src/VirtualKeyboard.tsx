import React, { useMemo, useCallback } from "react"
import { useTheme } from "next-themes"
import HiraganaKeyboard from "./components/HiraganaKeyboard"
import TenkeyKeyboard from "./components/TenkeyKeyboard"
import DeleteIcon from "./icons/DeleteIcon"
import type { KeyboardType } from "./utils/types"
import { dakutenMap, handakutenMap, hiraganaLayout, katakanaLayout, tenkeyLayout } from "./utils/constants"
import { fetchCandidates } from "./utils/utils"
import { useKeyboardLogic } from "./hooks/useKeyboardLogic"
import { useKeyboardState } from "./hooks/useKeyboardState"
import styles from "./styles/virtual-keyboard.module.css"

export { dakutenMap, handakutenMap, hiraganaLayout, katakanaLayout, tenkeyLayout, fetchCandidates }

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
  theme?: string
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
  theme: propTheme,
}) => {
  const { theme: systemTheme } = useTheme()
  const theme = propTheme || systemTheme

  const {
    isFocused,
    kanaMode,
    setKanaMode,
    alphabetCase,
    setAlphabetCase,
    handleFocus,
    handleBlur,
    handleKeyDown: internalHandleKeyDown,
  } = useKeyboardState(autoFocus, disabled, onFocus, onBlur, onKeyDown)

  const { inputText, setInputText, handleKeyPress, handleCandidateSelect, candidates } = useKeyboardLogic(
    value,
    onChange,
    keyboardType,
    kanaMode,
    maxLength,
    disabled,
  )

  const renderKey = useCallback((key: string | JSX.Element | null): JSX.Element => {
    if (key === "delete") {
      return <DeleteIcon key="delete-icon" />
    }
    return <React.Fragment key={key?.toString() || "empty-key"}>{key}</React.Fragment>
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
      kanaMode,
      setKanaMode,
      alphabetCase,
      setAlphabetCase,
      placeholder,
      candidates,
    }),
    [
      inputText,
      setInputText,
      handleKeyPress,
      enableConversion,
      value,
      handleCandidateSelect,
      disabled,
      theme,
      inputMode,
      kanaMode,
      setKanaMode,
      alphabetCase,
      setAlphabetCase,
      placeholder,
      candidates,
      renderKey,
    ],
  )

  const preventDefaultHandler = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  return (
    <div
      className={`${styles.container} ${className} ${disabled ? styles.disabled : ""} ${
        theme === "dark" ? styles.dark : ""
      }`}
      tabIndex={disabled ? -1 : 0}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onKeyDown={internalHandleKeyDown}
      role="application"
      aria-label="仮想キーボード"
      style={{
        WebkitTouchCallout: "none",
        WebkitUserSelect: "none",
        userSelect: "none",
        touchAction: "none",
      }}
      onContextMenu={preventDefaultHandler}
      onTouchStart={preventDefaultHandler}
      onTouchMove={preventDefaultHandler}
      onTouchEnd={preventDefaultHandler}
      onTouchCancel={preventDefaultHandler}
    >
      <div className={styles.keyboardWrapper}>
        {keyboardType === "hirakey" ? (
          <HiraganaKeyboard {...keyboardProps} />
        ) : (
          <TenkeyKeyboard
            onKeyPress={handleKeyPress}
            disabled={disabled}
            renderKey={renderKey}
            theme={theme}
            inputMode={inputMode}
            placeholder={placeholder}
            candidates={candidates}
          />
        )}
      </div>
    </div>
  )
}

export default React.memo(VKeyboard)

