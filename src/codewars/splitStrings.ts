export function splitStrings(str: string): string[] {
  const result = []

  for (let i = 0; i < str.length; i += 2) {
    const s1 = str[i]
    const s2 = str[i + 1] ?? '_'
    result.push(s1 + s2)
  }

  return result
}