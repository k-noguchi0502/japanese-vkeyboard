import type React from "react";
import type { KanaMode, AlphabetCase } from "../utils/types";
export declare const useKeyboardState: (autoFocus: boolean, disabled: boolean, onFocus?: () => void, onBlur?: () => void, onKeyDown?: ((e: React.KeyboardEvent<HTMLDivElement>) => void) | undefined) => {
    isFocused: boolean;
    kanaMode: KanaMode;
    setKanaMode: React.Dispatch<React.SetStateAction<KanaMode>>;
    alphabetCase: AlphabetCase;
    setAlphabetCase: React.Dispatch<React.SetStateAction<AlphabetCase>>;
    handleFocus: () => void;
    handleBlur: () => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
};
