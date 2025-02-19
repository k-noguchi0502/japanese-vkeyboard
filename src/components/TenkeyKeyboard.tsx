import React, { useState, useCallback } from "react"
import styles from "../styles/virtual-keyboard.module.css"
import { tenkeyLayout } from "../utils/constants"

interface TenkeyKeyboardProps {
  onKeyPress: (key: string) => void
  disabled?: boolean
  renderKey?: (key: string | JSX.Element | null) => React.ReactNode
  theme: string | undefined
  className?: string
  inputMode?: "text" | "search"
}

const TenkeyKeyboard: React.FC<TenkeyKeyboardProps> = ({
  onKeyPress,
  disabled,
  renderKey = (key) => key,
  theme,
  className,
  inputMode,
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

  return (
    <div className={`${styles.tenkeyWrapper} ${theme === "dark" ? styles.dark : ""} ${className || ""}`}>
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
                  disabled={disabled}
                  type="button"
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

