export function getMiddle(s: string) {
  if (s.length % 2 === 0) {
    const index = s.length / 2
    return s[index - 1] + s[index]
  } else {
    const index = Math.floor(s.length / 2)
    return s[index]
  }
}