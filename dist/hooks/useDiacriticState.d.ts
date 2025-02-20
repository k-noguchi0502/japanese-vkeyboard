export declare const useDiacriticState: (inputText: string) => {
    canApplyDakuten: boolean;
    canApplyHandakuten: boolean;
    canApplyKomoji: boolean;
    updateDiacriticState: (text: string) => void;
};
