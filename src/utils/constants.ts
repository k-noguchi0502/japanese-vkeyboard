import type { DakutenMap, HandakutenMap, HiraganaLayout, TenkeyLayout } from "./types"

export const dakutenMap: DakutenMap = {
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
  ["delete", "゛", "゜", "確定"],
]

export const tenkeyLayout: TenkeyLayout = [
  ["7", "4", "1", "0"],
  ["8", "5", "2", "."],
  ["9", "6", "3", "delete"],
]

