import type React from "react"

import { useState, useCallback } from "react"
import type { KanaMode, AlphabetCase } from "../utils/types"

export const useKeyboardState = (
  autoFocus: boolean,
  disabled: boolean,
  onFocus?: () => void,
  onBlur?: () => void,
  onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void,
) => {
  const [isFocused, setIsFocused] = useState(autoFocus)
  const [kanaMode, setKanaMode] = useState<KanaMode>("hiragana")
  const [alphabetCase, setAlphabetCase] = useState<AlphabetCase>("upper")

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

  return {
    isFocused,
    kanaMode,
    setKanaMode,
    alphabetCase,
    setAlphabetCase,
    handleFocus,
    handleBlur,
    handleKeyDown,
  }
}

