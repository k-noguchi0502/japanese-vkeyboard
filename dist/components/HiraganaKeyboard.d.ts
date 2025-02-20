import React from "react";
import type { KanaMode, AlphabetCase } from "../utils/types";
interface HiraganaKeyboardProps {
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
    onKeyPress: (key: string) => void;
    enableConversion: boolean;
    confirmedText: string;
    onCandidateSelect: (text: string) => void;
    disabled: boolean;
    renderKey: (key: string | JSX.Element | null) => React.ReactNode;
    theme: string | undefined;
    kanaMode: KanaMode;
    setKanaMode: React.Dispatch<React.SetStateAction<KanaMode>>;
    alphabetCase: AlphabetCase;
    setAlphabetCase: React.Dispatch<React.SetStateAction<AlphabetCase>>;
}
declare const _default: React.NamedExoticComponent<HiraganaKeyboardProps>;
export default _default;
