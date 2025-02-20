import React from 'react';

type KeyboardType = "hirakey" | "tenkey";

interface VKeyboardProps {
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

export { _default as VKeyboard, VKeyboardProps };
