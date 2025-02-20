import type React from "react";
import type { JSX } from "react";
export type KeyboardType = "hirakey" | "tenkey";
export type KanaMode = "hiragana" | "katakana" | "alphabet";
export type AlphabetCase = "upper" | "lower";
export interface HiraganaKeyboardProps {
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
    onKeyPress: (key: string) => void;
    enableConversion: boolean;
    confirmedText: string;
    onCandidateSelect: (candidate: string) => void;
    disabled: boolean;
    renderKey: (key: string | JSX.Element | null) => React.ReactNode;
    theme: string | undefined;
    kanaMode: KanaMode;
    setKanaMode: React.Dispatch<React.SetStateAction<KanaMode>>;
    alphabetCase: AlphabetCase;
    setAlphabetCase: React.Dispatch<React.SetStateAction<AlphabetCase>>;
}
export interface TenkeyKeyboardProps {
    onKeyPress: (key: string) => void;
    disabled: boolean;
    renderKey: (key: string | JSX.Element | null) => React.ReactNode;
    theme: string | undefined;
    inputMode?: "text" | "search";
    placeholder?: string;
    className?: string;
}
export type DakutenMap = {
    [key: string]: string;
};
export type HandakutenMap = {
    [key: string]: string;
};
export type KomojiMap = {
    [key: string]: string;
};
export type HiraganaLayout = (string | JSX.Element | null)[][];
export type KatakanaLayout = (string | JSX.Element | null)[][];
export type AlphabetLayout = (string | JSX.Element | null)[][];
export type TenkeyLayout = (string | JSX.Element)[][];
