import { type KeyboardEvent, type JSX } from "react";
/**
 * useKeyboardNavigation: キーボードナビゲーションを管理するカスタムフック
 *
 * このフックは、キーボードを使用した仮想キーボード上の移動と選択を可能にします。
 */
export declare const useKeyboardNavigation: (layout: (string | JSX.Element | null)[][], onKeyPress: (key: string) => void) => {
    focusedKey: string | null;
    handleKeyDown: (event: KeyboardEvent) => void;
};
