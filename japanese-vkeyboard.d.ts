declare module "japanese-vkeyboard" {
  import type { FC } from "react"

  interface VKeyboardProps {
    value: string
    onChange: (value: string) => void
    vType?: "hirakey" | "tenkey"
    eCon?: boolean
  }

  const VKeyboard: FC<VKeyboardProps>

  export default VKeyboard
}

