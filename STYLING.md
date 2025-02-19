# スタイリングガイド (Styling Guide)

このドキュメントでは、日本語仮想キーボードコンポーネントのスタイルをカスタマイズする方法について説明します。

## 基本的なスタイリング

コンポーネントのスタイルは、CSSモジュールを使用して定義されています。メインのスタイルファイルは `src/styles/virtual-keyboard.module.css` にあります。

## クラス名のオーバーライド

コンポーネントの特定の部分のスタイルを変更するには、以下のクラス名を使用してCSSをオーバーライドできます：

- `.container`: キーボード全体のコンテナ
- `.keyboard`: キーボードのレイアウト
- `.key`: 個々のキー
- `.deleteKey`: 削除キー
- `.confirmKey`: 確定キー
- `.inputArea`: 入力エリア
- `.candidateArea`: 変換候補エリア

例：

```css
.container {
  background-color: #f0f0f0;
}

.key {
  border-radius: 8px;
  background-color: #ffffff;
}

.deleteKey {
  background-color: #ff0000;
  color: #ffffff;
}

