# 日本語仮想キーボード (Japanese Virtual Keyboard)

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

```tsx
import React, { useState } from  'react';
import VKeyboard from  'japanese-virtual-keyboard';
const  App  = () => {
const [inputValue, setInputValue] =  useState('');
return (
<div>
<input
type="text"
value={inputValue}
onChange={(e) =>  setInputValue(e.target.value)}
placeholder="ここに入力されます"
/>
<VKeyboard
value={inputValue}
onChange={setInputValue}
keyboardType="hirakey"
enableConversion={true}
/>
</div>
);
};

export  default App;
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

```markdown
## ファイル構造
japanese-vkeyboard/
├── src/
│ ├── components/
│ │ ├── HiraganaKeyboard.tsx
│ │ ├── TenkeyKeyboard.tsx
│ │ └── DeleteIcon.tsx
│ ├── styles/
│ │ └── virtual-keyboard.module.css
│ ├── utils/
│ │ ├── constants.ts
│ │ ├── types.ts
│ │ └── utils.ts
│ └── VirtualKeyboard.tsx
├── app/
│ └── page.tsx
├── tsconfig.json
├── rollup.config.js
└── package.json
```
この構造により、コードの整理と保守が容易になります。

## カスタマイズ
スタイルのカスタマイズは、CSSモジュールを上書きすることで可能です。詳細は[スタイリングガイド](./STYLING.md)を参照してください。
## ライセンス
MITライセンスの下で公開されています。詳細は[LICENSE](./LICENSE)ファイルを参照してください。
## コントリビューション
バグ報告や機能リクエストは[Issuesページ](https://github.com/k-noguchi0502/japanese-vkeyboard/issues)にお願いします。プルリクエストも歓迎します！