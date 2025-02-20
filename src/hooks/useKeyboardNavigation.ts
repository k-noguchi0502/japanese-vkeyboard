import { useState, useCallback, type KeyboardEvent, type JSX } from "react"

/**
 * useKeyboardNavigation: キーボードナビゲーションを管理するカスタムフック
 *
 * このフックは、キーボードを使用した仮想キーボード上の移動と選択を可能にします。
 */
export const useKeyboardNavigation = (layout: (string | JSX.Element | null)[][], onKeyPress: (key: string) => void) => {
  const [focusedKey, setFocusedKey] = useState<string | null>(null)

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!focusedKey) {
        if (layout.length > 0 && layout[0].length > 0) {
          setFocusedKey("0-0")
        }
        return
      }

      const [row, col] = focusedKey.split("-").map(Number)

      switch (event.key) {
        case "ArrowUp":
          if (row > 0) setFocusedKey(`${row - 1}-${col}`)
          break
        case "ArrowDown":
          if (row < layout.length - 1) setFocusedKey(`${row + 1}-${col}`)
          break
        case "ArrowLeft":
          if (col > 0) setFocusedKey(`${row}-${col - 1}`)
          break
        case "ArrowRight":
          if (col < layout[row].length - 1) setFocusedKey(`${row}-${col + 1}`)
          break
        case "Enter":
        case " ":
          const key = layout[row][col]
          if (typeof key === "string") onKeyPress(key)
          break
        default:
          break
      }

      event.preventDefault()
    },
    [focusedKey, layout, onKeyPress],
  )

  return { focusedKey, handleKeyDown }
}

