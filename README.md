# 日本語仮想キーボード (Japanese Virtual Keyboard)
![仮想キーボードの画像](https://i.imgur.com/fHvqUK5.png)


## 概要
このパッケージは、Webアプリケーション向けの日本語入力用仮想キーボードコンポーネントを提供します。React環境で簡単に統合でき、ひらがな入力と数字入力（テンキー）の両方をサポートしています。

## 特徴
- ✅ ひらがな入力とテンキー入力の切り替え機能
- 🔄 Google IME APIを使用した漢字変換機能
- 📱 レスポンシブデザイン対応
- 🌓 ダークモード対応
- ⚛️ React/Next.jsプロジェクトとの簡単な統合

## インストール
```bash
npm  install  japanese-vkeyboard
# または
yarn  add  japanese-vkeyboard
```
## 基本的な使用方法

```ts
"use client"

import { useState } from  "react"
import { VKeyboard } from  "japanese-vkeyboard"
import  "japanese-vkeyboard/dist/virtual-keyboard.css"

export  default  function  ExamplePage() {
const [inputValue, setInputValue] =  useState("")
const  handleChange  = (value:  string) => { setInputValue(value) }
return (
	<div  className="container mx-auto p-4">
		<h1  className="text-2xl font-bold mb-4">VKeyboard Example</h1>
		<div  className="mb-4">
			<input type="text" value={inputValue} onChange={(e) =>  setInputValue(e.target.value)} className="w-full p-2 border border-gray-300 rounded" placeholder="Input will appear here" />
		</div>
		<VKeyboard  value={inputValue} onChange={handleChange} keyboardType="hirakey"  enableConversion={true} />
	</div>
		)
}
```

## プロパティ
| プロパティ | 型 | デフォルト値 | 説明 |
|------------|------|--------------|------|
| `value` | string | - | 現在の入力値 |
| `onChange` | (value: string) => void | - | 入力値が変更されたときに呼び出される関数 |
| `keyboardType` | "hirakey" \| "tenkey" | "hirakey" | キーボードのタイプ |
| `enableConversion` | boolean | true | 漢字変換機能の有効/無効 |
| `className` | string | - | カスタムCSSクラス名 |
| `disabled` | boolean | false | キーボードの無効化 |

## ファイル構造

```
japanese-vkeyboard/
├── src/
│   ├── components/
│   │   ├── HiraganaKeyboard.tsx
│   │   └── TenkeyKeyboard.tsx
│   ├── hooks/
│   │   ├── useDiacriticState.ts
│   │   ├── useKeyboardLogic.ts
│   │   ├── useKeyboardNavigation.ts
│   │   └── useKeyboardState.ts
│   ├── icons/
│   │   └── DeleteIcon.tsx
│   ├── styles/
│   │   └── virtual-keyboard.module.css
│   ├── utils/
│   │   ├── constants.ts
│   │   ├── types.ts
│   │   └── utils.ts
│   ├── VirtualKeyboard.tsx
│   ├── client.ts
│   └── index.ts
├── app/
│   ├── example.tsx
│   ├── layout.tsx
│   └── page.tsx
├── tsconfig.json
├── rollup.config.js
├── postcss.config.js
└── package.json
```

## カスタマイズ
スタイルのカスタマイズは、CSSモジュールを上書きすることで可能です。詳細は[スタイリングガイド](./STYLING.md)を参照してください。
## ライセンス
MITライセンスの下で公開されています。詳細は[LICENSE](./LICENSE)ファイルを参照してください。
## コントリビューション
バグ報告や機能リクエストは[Issuesページ](https://github.com/k-noguchi0502/japanese-vkeyboard/issues)にお願いします。プルリクエストも歓迎します！