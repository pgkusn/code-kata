export function sameCase(a: string, b: string): number {
  if (/[^A-Za-z]/.test(a + b)) return -1
  if (/^[A-Z]+$|^[a-z]+$/.test(a + b)) return 1
  return 0
}