import React from "react";
import type { JSX } from "react/jsx-runtime";
interface TenkeyKeyboardProps {
    onKeyPress: (key: string) => void;
    disabled?: boolean;
    renderKey?: (key: string | JSX.Element | null) => JSX.Element;
    theme: string | undefined;
    inputMode?: string;
    placeholder?: string;
    className?: string;
    candidates?: string[];
}
declare const _default: React.NamedExoticComponent<TenkeyKeyboardProps>;
export default _default;
