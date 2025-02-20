import type {
  DakutenMap,
  HandakutenMap,
  KomojiMap,
  HiraganaLayout,
  KatakanaLayout,
  AlphabetLayout,
  TenkeyLayout,
} from "./types"

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
  ウ: "ヴ",
  カ: "ガ",
  キ: "ギ",
  ク: "グ",
  ケ: "ゲ",
  コ: "ゴ",
  サ: "ザ",
  シ: "ジ",
  ス: "ズ",
  セ: "ゼ",
  ソ: "ゾ",
  タ: "ダ",
  チ: "ヂ",
  ツ: "ヅ",
  テ: "デ",
  ト: "ド",
  ハ: "バ",
  ヒ: "ビ",
  フ: "ブ",
  ヘ: "ベ",
  ホ: "ボ",
}

export const handakutenMap: HandakutenMap = {
  は: "ぱ",
  ひ: "ぴ",
  ふ: "ぷ",
  へ: "ぺ",
  ほ: "ぽ",
  ハ: "パ",
  ヒ: "ピ",
  フ: "プ",
  ヘ: "ペ",
  ホ: "ポ",
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
  ア: "ァ",
  イ: "ィ",
  ウ: "ゥ",
  エ: "ェ",
  オ: "ォ",
  カ: "ヵ",
  ケ: "ヶ",
  ツ: "ッ",
  ヤ: "ャ",
  ユ: "ュ",
  ヨ: "ョ",
  ワ: "ヮ",
}

export const hiraganaLayout: HiraganaLayout = [
  ["あ", "い", "う", "え", "お"],
  ["か", "き", "く", "け", "こ"],
  ["さ", "し", "す", "せ", "そ"],
  ["た", "ち", "つ", "て", "と"],
  ["な", "に", "ぬ", "ね", "の"],
  ["は", "ひ", "ふ", "へ", "ほ"],
  ["ま", "み", "む", "め", "も"],
  ["や", "ゆ", "よ", null, "ー"],
  ["ら", "り", "る", "れ", "ろ"],
  ["わ", "を", "ん", "ABC", "カナ"],
  ["delete", "゛゜", "小", "確定"],
]

export const katakanaLayout: KatakanaLayout = [
  ["ア", "イ", "ウ", "エ", "オ"],
  ["カ", "キ", "ク", "ケ", "コ"],
  ["サ", "シ", "ス", "セ", "ソ"],
  ["タ", "チ", "ツ", "テ", "ト"],
  ["ナ", "ニ", "ヌ", "ネ", "ノ"],
  ["ハ", "ヒ", "フ", "ヘ", "ホ"],
  ["マ", "ミ", "ム", "メ", "モ"],
  ["ヤ", "ユ", "ヨ", null, "ー"],
  ["ラ", "リ", "ル", "レ", "ロ"],
  ["ワ", "ヲ", "ン", "ABC", "かな"],
  ["delete", "゛゜", "小", "確定"],
]

export const alphabetLayout: AlphabetLayout = [
  ["A", "K", "U", null, null],
  ["B", "L", "V", null, null],
  ["C", "M", "W", null, null],
  ["D", "N", "X", null, null],
  ["E", "O", "Y", null, null],
  ["F", "P", "Z", null, null],
  ["G", "Q", null, null, null],
  ["H", "R", null, null, null],
  ["I", "S", null, null, null],
  ["J", "T", null, "かな", "カナ"],
  ["delete", "Aa", null, "確定"],
]

export const smallalphabetLayout: AlphabetLayout = [
  ["a", "k", "u", null, null],
  ["b", "l", "v", null, null],
  ["c", "m", "w", null, null],
  ["d", "n", "x", null, null],
  ["e", "o", "y", null, null],
  ["f", "p", "z", null, null],
  ["g", "q", null, null, null],
  ["h", "r", null, null, null],
  ["i", "s", null, null, null],
  ["j", "t", null, "かな", "カナ"],
  ["delete", "Aa", null, "確定"],
]

export const tenkeyLayout: TenkeyLayout = [
  ["7", "4", "1", "0"],
  ["8", "5", "2", "."],
  ["9", "6", "3", "delete"],
]

