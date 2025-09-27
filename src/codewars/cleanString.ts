export function cleanString(str: string): string {
  let result = ''
  for (const s of str) {
    if (s === '#') {
      result = result.slice(0, -1)
    } else {
      result += s
    }
  }
  return result
}