import React, { useState, useCallback } from "react"
import styles from "../styles/virtual-keyboard.module.css"
import { tenkeyLayout } from "../utils/constants"
import type { JSX } from "react/jsx-runtime"

interface TenkeyKeyboardProps {
  onKeyPress: (key: string) => void
  disabled?: boolean
  renderKey?: (key: string | JSX.Element | null) => JSX.Element
  theme: string | undefined
  inputMode?: string
  placeholder?: string
  className?: string
  candidates?: string[]
}

const TenkeyKeyboard: React.FC<TenkeyKeyboardProps> = ({
  onKeyPress,
  disabled,
  renderKey = (key) => <>{key}</>,
  theme,
  inputMode,
  placeholder,
  className,
  candidates,
}) => {
  const [activeKey, setActiveKey] = useState<string | null>(null)

  const handleKeyPress = useCallback(
    (key: string | JSX.Element) => {
      if (disabled) return

      const keyValue = typeof key === "string" ? key : "delete"
      setActiveKey(keyValue)
      onKeyPress(keyValue)
      setTimeout(() => setActiveKey(null), 100)
    },
    [onKeyPress, disabled],
  )

  const preventDefaultHandler = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }, [])

  const handleTouchStart = useCallback(
    (e: React.TouchEvent<HTMLButtonElement>, key: string | JSX.Element) => {
      e.preventDefault()
      handleKeyPress(key)
    },
    [handleKeyPress],
  )

  return (
    <div
      className={`${styles.tenkeyWrapper} ${theme === "dark" ? styles.dark : ""} ${className || ""}`}
      onContextMenu={preventDefaultHandler}
      onTouchStart={preventDefaultHandler}
      onTouchMove={preventDefaultHandler}
      onTouchEnd={preventDefaultHandler}
      onTouchCancel={preventDefaultHandler}
    >
      <div className={`${styles.keyboard} ${styles.tenkeyGrid} ${theme === "dark" ? styles.dark : ""}`}>
        {tenkeyLayout.map((column, columnIndex) => (
          <div key={columnIndex} className={styles.tenkeyColumn}>
            {column.map((key) => {
              const isDeleteKey = key === "delete"
              return (
                <button
                  key={typeof key === "string" ? key : "delete"}
                  className={`${styles.tenkeyKey} ${styles.autoResizeFont} ${
                    activeKey === (typeof key === "string" ? key : "delete") ? styles.active : ""
                  } ${isDeleteKey ? `${styles.deleteKey} ${styles.functionKey}` : ""}`}
                  onClick={() => handleKeyPress(key)}
                  onTouchStart={(e) => handleTouchStart(e, key)}
                  disabled={disabled}
                  type="button"
                  aria-label={typeof key === "string" ? key : "削除"}
                >
                  {renderKey(key)}
                </button>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default React.memo(TenkeyKeyboard)

