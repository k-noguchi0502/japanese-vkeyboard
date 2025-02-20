/// <reference types="react" />
import type { KeyboardType, KanaMode } from "../utils/types";
export declare const useKeyboardLogic: (value: string, onChange: (value: string) => void, keyboardType: KeyboardType, kanaMode: KanaMode, maxLength?: number, disabled?: boolean) => {
    inputText: string;
    setInputText: import("react").Dispatch<import("react").SetStateAction<string>>;
    handleKeyPress: (key: string) => void;
    handleCandidateSelect: (candidate: string) => void;
    candidates: string[];
};
