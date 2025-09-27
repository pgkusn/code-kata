export function vowelShift(text: string | null, n: number): string | null {
  if (text === null) return null

  const regex = /[aeiou]/gi
  const vowels = text.match(regex)

  if (!vowels) return text

  // 實現陣列輪轉邏輯
  const rotateArray = (arr: string[], n: number): string[] => {
    if (n === 0) return arr

    const len = arr.length

    if (n > 0) {
      // 向右輪轉 n 位：將最後 n 個元素移到前面
      const normalizedN = n % len
      if (normalizedN === 0) return [...arr]
      return [...arr.slice(-normalizedN), ...arr.slice(0, -normalizedN)]
    } else {
      // 向左輪轉 |n| 位：將前 |n| 個元素移到後面
      const normalizedN = Math.abs(n) % len
      if (normalizedN === 0) return [...arr]
      return [...arr.slice(normalizedN), ...arr.slice(0, normalizedN)]
    }
  }

  const shiftedVowels = rotateArray(vowels, n)
  let vowelIndex = 0

  return text.replace(regex, () => shiftedVowels[vowelIndex++])
}
