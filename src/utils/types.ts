import type React from "react"
import type { JSX } from "react"

export type KeyboardType = "hirakey" | "tenkey"

export interface HiraganaKeyboardProps {
  inputText: string
  setInputText: (text: string) => void
  onKeyPress: (key: string) => void
  enableConversion: boolean
  confirmedText: string
  onCandidateSelect: (candidate: string) => void
  disabled: boolean
  renderKey: (key: string | JSX.Element | null) => React.ReactNode
}

export interface TenkeyKeyboardProps {
  onKeyPress: (key: string) => void
  disabled: boolean
  renderKey: (key: string | JSX.Element | null) => React.ReactNode
}

export type DakutenMap = { [key: string]: string }
export type HandakutenMap = { [key: string]: string }
export type KomojiMap = { [key: string]: string }
export type HiraganaLayout = (string | JSX.Element | null)[][]
export type TenkeyLayout = (string | JSX.Element)[][]

