import customConversionList from "./Conversions.json"
import { dakutenMap, handakutenMap, komojiMap } from "./constants"

interface ConversionResult {
  original: string
  candidates: string[]
}

interface CustomConversion {
  original: string
  hiragana: string
}

export const fetchCandidates = async (text: string): Promise<string[]> => {
  const customCandidates = getCustomCandidates(text)
  const apiCandidates = await fetchApiCandidates(text)

  // カスタム候補とAPI候補を結合し、重複を除去
  const combinedCandidates = Array.from(new Set([...customCandidates, ...apiCandidates]))

  return combinedCandidates
}

const getCustomCandidates = (text: string): string[] => {
  const candidates: string[] = []

  for (const conversion of customConversionList) {
    const similarity = stringSimilarity(text, conversion.hiragana)
    if (similarity >= 0.7) {
      candidates.push(conversion.original)
    }
  }

  return candidates
}

// レーベンシュタイン距離を計算する関数
const levenshteinDistance = (a: string, b: string): number => {
  const matrix = []

  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i]
  }

  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j
  }

  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1]
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1)
      }
    }
  }

  return matrix[b.length][a.length]
}

// 文字列の類似度を計算する関数
const stringSimilarity = (a: string, b: string): number => {
  const longerLength = Math.max(a.length, b.length)
  if (longerLength === 0) {
    return 1.0
  }
  return (longerLength - levenshteinDistance(a, b)) / longerLength
}

const fetchApiCandidates = async (text: string): Promise<string[]> => {
  const callbackName = `jsonp_callback_${Date.now()}`
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
      reject(new Error("API request timed out"))
    }, 5000)
    ;(window as any)[callbackName] = (data: any) => {
      clearTimeout(timeout)
      if (data && Array.isArray(data)) {
        const candidates = generateCombinedCandidates(data)
        resolve(candidates)
      } else {
        console.error("Invalid data structure received from API")
        resolve([text]) // Resolve with the original text if the API fails
      }
      delete (window as any)[callbackName]
      document.body.removeChild(document.getElementById(callbackName) as HTMLElement)
    }

    const encodedText = encodeURIComponent(text)
    const script = document.createElement("script")
    script.id = callbackName
    script.src = `https://www.google.com/transliterate?langpair=ja-Hira|ja&text=${encodedText}&jsonp=${callbackName}`
    script.onerror = () => {
      clearTimeout(timeout)
      console.error("Failed to load the script")
      resolve([text]) // Resolve with the original text if the script fails to load
    }
    document.body.appendChild(script)
  })
}

const generateCombinedCandidates = (data: [string, string[]][]): string[] => {
  const maxCandidates = Math.max(...data.map((item) => item[1].length))
  const combinedCandidates: string[] = []

  for (let i = 0; i < maxCandidates; i++) {
    let candidate = ""
    for (const [_, candidates] of data) {
      candidate += candidates[i] || candidates[0] || ""
    }
    combinedCandidates.push(candidate)
  }

  return combinedCandidates
}

export const combineCharacters = (text: string): string => {
  return text.split("").reduce((acc, char, index, array) => {
    if (index > 0) {
      const prevChar = acc.slice(-1)
      if (char === "゛" && prevChar in dakutenMap) {
        return acc.slice(0, -1) + dakutenMap[prevChar as keyof typeof dakutenMap]
      } else if (char === "゜" && prevChar in handakutenMap) {
        return acc.slice(0, -1) + handakutenMap[prevChar as keyof typeof handakutenMap]
      } else if (char === "小" && prevChar in komojiMap) {
        return acc.slice(0, -1) + komojiMap[prevChar as keyof typeof komojiMap]
      }
    }
    return acc + char
  }, "")
}

export const processConversionResults = (
  inputText: string,
  candidates: string[],
): { convertedText: string; remainingText: string } => {
  if (candidates.length > 0) {
    return { convertedText: candidates[0], remainingText: "" }
  } else {
    return { convertedText: "", remainingText: inputText }
  }
}

