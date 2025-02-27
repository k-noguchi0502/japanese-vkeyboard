export declare const fetchCandidates: (text: string) => Promise<string[]>;
export declare const combineCharacters: (text: string) => string;
export declare const processConversionResults: (inputText: string, candidates: string[]) => {
    convertedText: string;
    remainingText: string;
};
