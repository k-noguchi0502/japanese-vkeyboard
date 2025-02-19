interface ConversionResult {
  original: string
  candidates: string[]
}

export const fetchCandidates = async (text: string): Promise<string[]> => {
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
        resolve([])
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
      reject(new Error("Failed to load the script"))
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

