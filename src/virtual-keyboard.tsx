import type React from "react"
// "use client" directive removed. This component only works on the client-side.

import { useState, useCallback, useEffect, useRef } from "react"
import type { FC, ReactElement } from "react"
import styles from "./virtual-keyboard.module.css"

interface VKeyboardProps {
  value: string
  onChange: (value: string) => void
  vType?: "hirakey" | "tenkey"
  eCon?: boolean
  className?: string
  isFloating?: boolean
}

interface Candidate {
  value: string
}

const hiraganaLayout = [
  ["あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ"],
  ["い", "き", "し", "ち", "に", "ひ", "み", "ゆ", "り", "を"],
  ["う", "く", "す", "つ", "ぬ", "ふ", "む", "よ", "る", "ん"],
  ["え", "け", "せ", "て", "ね", "へ", "め", "゛", "れ", "削除"],
  ["お", "こ", "そ", "と", "の", "ほ", "も", "゜", "ろ", "変換"],
  ["ー", "、", "。", "？", "！", "（", "）", "/", "・", "確定"],
]

const tenkeyLayout = [
  ["7", "8", "9"],
  ["4", "5", "6"],
  ["1", "2", "3"],
  ["0", ".", "削除"],
]

const dakutenMap: { [key: string]: string } = {
  か: "が",
  き: "ぎ",
  く: "ぐ",
  け: "げ",
  こ: "ご",
  さ: "ざ",
  し: "じ",
  す: "ず",
  せ: "ぜ",
  そ: "ぞ",
  た: "だ",
  ち: "ぢ",
  つ: "づ",
  て: "で",
  と: "ど",
  は: "ば",
  ひ: "び",
  ふ: "ぶ",
  へ: "べ",
  ほ: "ぼ",
}

const handakutenMap: { [key: string]: string } = {
  は: "ぱ",
  ひ: "ぴ",
  ふ: "ぷ",
  へ: "ぺ",
  ほ: "ぽ",
}

const VKeyboard: FC<VKeyboardProps> = ({
  value,
  onChange,
  vType = "hirakey",
  eCon = true,
  className = "",
  isFloating = false,
}): ReactElement => {
  const [keyboardType, setKeyboardType] = useState<"hirakey" | "tenkey">(vType)
  const [activeKey, setActiveKey] = useState<string | null>(null)
  const [candidates, setCandidates] = useState<Candidate[]>([])
  const [showCandidates, setShowCandidates] = useState(false)
  const [conversionEnabled, setConversionEnabled] = useState(vType === "hirakey" && eCon)
  const [confirmedText, setConfirmedText] = useState("")
  const [inputText, setInputText] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [isResizing, setIsResizing] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [size, setSize] = useState({ width: 400, height: 300 })
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0 })
  const [isDeleting, setIsDeleting] = useState(false)
  const deleteIntervalRef = useRef<NodeJS.Timeout | null>(null)

  const layout = keyboardType === "hirakey" ? hiraganaLayout : tenkeyLayout

  const fetchCandidates = useCallback(
    (text: string) => {
      if (!conversionEnabled || keyboardType === "tenkey") return

      const script = document.createElement("script")
      const callbackName = `jsonp_callback_${Date.now()}`
      ;(window as any)[callbackName] = (data: any) => {
        if (data && data[0] && data[0][1]) {
          setCandidates(data[0][1].map((candidate: string) => ({ value: candidate })))
          setShowCandidates(true)
        } else {
          console.error("Invalid data structure received from API")
        }
        delete (window as any)[callbackName]
        document.body.removeChild(script)
      }

      const encodedText = encodeURIComponent(text)
      script.src = `https://www.google.com/transliterate?langpair=ja-Hira|ja&text=${encodedText}&jsonp=${callbackName}`
      document.body.appendChild(script)
    },
    [conversionEnabled, keyboardType],
  )

  const handleKeyPress = useCallback(
    (key: string) => {
      setActiveKey(key)
      let newInputText = inputText
      let newConfirmedText = confirmedText

      switch (key) {
        case "削除":
          if (inputText.length > 0) {
            newInputText = inputText.slice(0, -1)
          } else if (confirmedText.length > 0) {
            newConfirmedText = confirmedText.slice(0, -1)
          }
          break
        case "変換":
          if (conversionEnabled && inputText && keyboardType === "hirakey") {
            fetchCandidates(inputText)
          }
          return
        case "確定":
          newConfirmedText += inputText
          newInputText = ""
          setShowCandidates(false)
          break
        default:
          if (keyboardType === "hirakey") {
            const lastChar = inputText.slice(-1)
            if (key === "゛" && lastChar in dakutenMap) {
              newInputText = inputText.slice(0, -1) + dakutenMap[lastChar]
            } else if (key === "゜" && lastChar in handakutenMap) {
              newInputText = inputText.slice(0, -1) + handakutenMap[lastChar]
            } else if (key === "　") {
              newInputText += " "
            } else {
              newInputText += key
            }
          } else {
            newInputText += key
          }
      }

      setInputText(newInputText)
      setConfirmedText(newConfirmedText)
      onChange(newConfirmedText + newInputText)
      setTimeout(() => setActiveKey(null), 100)
    },
    [onChange, fetchCandidates, keyboardType, conversionEnabled, inputText, confirmedText],
  )

  const handleCandidateSelect = (candidate: string) => {
    onChange(confirmedText + candidate)
    setConfirmedText((prevConfirmed) => prevConfirmed + candidate)
    setInputText("")
    setShowCandidates(false)
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isFloating) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
    }
  }

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        })
      } else if (isResizing) {
        setSize({
          width: Math.max(200, e.clientX - resizeStart.x),
          height: Math.max(150, e.clientY - resizeStart.y),
        })
      }
    },
    [isDragging, isResizing, dragStart, resizeStart],
  )

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    setIsResizing(false)
  }, [])

  const handleResizeStart = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (isFloating) {
      setIsResizing(true)
      setResizeStart({ x: e.clientX - size.width, y: e.clientY - size.height })
    }
  }

  const startDeleting = useCallback(() => {
    setIsDeleting(true)
    deleteIntervalRef.current = setInterval(() => {
      setInputText((prev) => prev.slice(0, -1))
    }, 100)
  }, [])

  const stopDeleting = useCallback(() => {
    setIsDeleting(false)
    if (deleteIntervalRef.current) {
      clearInterval(deleteIntervalRef.current)
    }
  }, [])

  useEffect(() => {
    return () => {
      if (deleteIntervalRef.current) {
        clearInterval(deleteIntervalRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect()
        containerRef.current.style.setProperty("--container-width", `${width}px`)
        containerRef.current.style.setProperty("--container-height", `${height}px`)

        const keys = containerRef.current.querySelectorAll(`.${styles.key}`)
        keys.forEach((key) => {
          const { width: keyWidth, height: keyHeight } = (key as HTMLElement).getBoundingClientRect()
          ;(key as HTMLElement).style.setProperty("--key-width", `${keyWidth}px`)
          ;(key as HTMLElement).style.setProperty("--key-height", `${keyHeight}px`)
        })
      }
    })

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current)
    }

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current)
      }
    }
  }, [])

  useEffect(() => {
    setKeyboardType(vType)
    setConversionEnabled(vType === "hirakey" && eCon)
  }, [vType, eCon])

  useEffect(() => {
    setShowCandidates(false)
  }, [])

  useEffect(() => {
    if (isFloating) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseup", handleMouseUp)
      }
    }
  }, [isFloating, handleMouseMove, handleMouseUp])

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault()
  }

  return (
    <div
      className={`${styles.container} ${isFloating ? styles.floating : ""} ${className}`}
      ref={containerRef}
      style={
        isFloating
          ? {
              position: "fixed",
              left: `${position.x}px`,
              top: `${position.y}px`,
              width: `${size.width}px`,
              height: `${size.height}px`,
            }
          : undefined
      }
      onMouseDown={handleMouseDown}
      onContextMenu={handleContextMenu}
    >
      <div className={styles.keyboardWrapper}>
        {keyboardType === "hirakey" && conversionEnabled && (
          <div className={styles.inputArea}>
            <div className={styles.displayArea}>
              <div className={styles.inputText}>{inputText}</div>
            </div>
            <div className={`${styles.candidateArea} ${conversionEnabled ? styles.enabled : styles.disabled}`}>
              {showCandidates && candidates.length > 0 ? (
                <div className={styles.candidateList}>
                  {candidates.map((candidate, index) => (
                    <button
                      key={index}
                      className={styles.candidateItem}
                      onClick={() => handleCandidateSelect(candidate.value)}
                    >
                      {candidate.value}
                    </button>
                  ))}
                </div>
              ) : (
                <div className={styles.placeholderText}>変換候補がここに表示されます</div>
              )}
            </div>
          </div>
        )}
        <div className={`${styles.keyboard} ${styles[keyboardType]}`}>
          {layout.map((row, rowIndex) => (
            <div key={rowIndex} className={styles.row}>
              {row.map((key) => (
                <button
                  key={key}
                  className={`${styles.key} ${activeKey === key ? styles.active : ""} ${
                    ["削除", "変換", "確定"].includes(key) ? styles.functionKey : ""
                  } ${key === "変換" && (!conversionEnabled || keyboardType === "tenkey") ? styles.disabled : ""} ${
                    key === "削除"
                      ? styles.deleteKey
                      : key === "変換"
                        ? styles.convertKey
                        : key === "確定"
                          ? styles.confirmKey
                          : ""
                  }`}
                  onClick={() => handleKeyPress(key)}
                  onMouseDown={() => key === "削除" && startDeleting()}
                  onMouseUp={() => key === "削除" && stopDeleting()}
                  onMouseLeave={() => key === "削除" && stopDeleting()}
                  onTouchStart={() => key === "削除" && startDeleting()}
                  onTouchEnd={() => key === "削除" && stopDeleting()}
                  disabled={key === "変換" && (!conversionEnabled || keyboardType === "tenkey")}
                >
                  {key}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
      {isFloating && <div className={styles.resizeHandle} onMouseDown={handleResizeStart}></div>}
    </div>
  )
}

export default VKeyboard

