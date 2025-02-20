import React from "react";
import type { KeyboardType } from "./utils/types";
import { dakutenMap, handakutenMap, hiraganaLayout, katakanaLayout, tenkeyLayout } from "./utils/constants";
import { fetchCandidates } from "./utils/utils";
export { dakutenMap, handakutenMap, hiraganaLayout, katakanaLayout, tenkeyLayout, fetchCandidates };
export interface VKeyboardProps {
    value: string;
    onChange: (value: string) => void;
    keyboardType?: KeyboardType;
    enableConversion?: boolean;
    className?: string;
    placeholder?: string;
    maxLength?: number;
    disabled?: boolean;
    autoFocus?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
    inputMode?: "text" | "search";
    onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
    theme?: string;
}
declare const _default: React.NamedExoticComponent<VKeyboardProps>;
export default _default;
