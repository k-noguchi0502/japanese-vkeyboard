# 日本語仮想キーボード (Japanese vKeyboard)

## 概要

このパッケージは、Webアプリケーション向けの日本語入力用仮想キーボードコンポーネントを提供します。ひらがな入力と数字入力（テンキー）の両方をサポートし、Google IME APIを使用した漢字変換機能も実装しています。

## 特徴

- ✨ ひらがな入力とテンキー入力の切り替え
- 🔄 漢字変換機能（Google IME API使用）

## インストール

npm または yarn を使用してインストールできます：

```bash
npm install japanese-vkeyboard
# または
yarn add japanese-vkeyboard
```

## プロパティ

VKeyboardコンポーネントは以下のプロパティを受け取ります。

- `value` (string): 現在の入力値
- `onChange` (function): 入力値が変更されたときに呼び出される関数
- `vType` ("hirakey" | "tenkey", オプション): キーボードのタイプ。デフォルトは "hirakey"
  - "hirakey": ひらがな入力キーボード
  - "tenkey": 数字入力キーボード（テンキー）
- `eCon` (boolean, オプション): 変換機能の有効/無効。デフォルトは true
- `className` (string, オプション): キーボードのクラス名
- `isFloating` (boolean, オプション): 仮想キーボードを浮動させるかどうか。デフォルトは false

## 使い方

以下は、仮想キーボードを使用する基本的な例ですです。

```tsx
"use client"
import React, { useState, type ChangeEvent } from "react"
import VKeyboard from "japanese-virtual-keyboard"

const ExampleUsage: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("")

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleKeyboardInput = (newValue: string) => {
    setInputValue(newValue)
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">仮想キーボードの例</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="ここに入力されます"
      />
      <VKeyboard 
        value={inputValue} 
        onChange={handleKeyboardInput} 
        vType="hirakey" 
        eCon={true} 
      />
    </div>
  )
}

export default ExampleUsage
```

