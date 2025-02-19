import type { DakutenMap, HandakutenMap, KomojiMap, HiraganaLayout, TenkeyLayout } from "./types"

export const dakutenMap: DakutenMap = {
  う: "ゔ",
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

export const handakutenMap: HandakutenMap = {
  は: "ぱ",
  ひ: "ぴ",
  ふ: "ぷ",
  へ: "ぺ",
  ほ: "ぽ",
}

export const komojiMap: KomojiMap = {
  あ: "ぁ",
  い: "ぃ",
  う: "ぅ",
  え: "ぇ",
  お: "ぉ",
  か: "ゕ",
  け: "ゖ",
  つ: "っ",
  や: "ゃ",
  ゆ: "ゅ",
  よ: "ょ",
  わ: "ゎ",
}

export const hiraganaLayout: HiraganaLayout = [
  ["あ", "い", "う", "え", "お"],
  ["か", "き", "く", "け", "こ"],
  ["さ", "し", "す", "せ", "そ"],
  ["た", "ち", "つ", "て", "と"],
  ["な", "に", "ぬ", "ね", "の"],
  ["は", "ひ", "ふ", "へ", "ほ"],
  ["ま", "み", "む", "め", "も"],
  ["や", "ゆ", "よ", null, null],
  ["ら", "り", "る", "れ", "ろ"],
  ["わ", "を", "ん", null, null],
  ["delete", "゛゜", "小", "確定"],
]

export const tenkeyLayout: TenkeyLayout = [
  ["7", "4", "1", "0"],
  ["8", "5", "2", "."],
  ["9", "6", "3", "delete"],
]

