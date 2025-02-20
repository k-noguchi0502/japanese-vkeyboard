import { useState, useCallback, useEffect } from "react"
import { dakutenMap, handakutenMap, komojiMap } from "../utils/constants"

export const useDiacriticState = (inputText: string) => {
  const [canApplyDakuten, setCanApplyDakuten] = useState(false)
  const [canApplyHandakuten, setCanApplyHandakuten] = useState(false)
  const [canApplyKomoji, setCanApplyKomoji] = useState(false)

  const updateDiacriticState = useCallback((text: string) => {
    if (text.length > 0) {
      const lastChar = text.slice(-1)
      setCanApplyDakuten(lastChar in dakutenMap)
      setCanApplyHandakuten(lastChar in handakutenMap)
      setCanApplyKomoji(lastChar in komojiMap)
    } else {
      setCanApplyDakuten(false)
      setCanApplyHandakuten(false)
      setCanApplyKomoji(false)
    }
  }, [])

  useEffect(() => {
    updateDiacriticState(inputText)
  }, [inputText, updateDiacriticState])

  return {
    canApplyDakuten,
    canApplyHandakuten,
    canApplyKomoji,
    updateDiacriticState,
  }
}

