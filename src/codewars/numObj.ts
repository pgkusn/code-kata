export function numObj(s: number[]): Record<number, string>[] {
  return s.map(n => ({
    [n]: String.fromCharCode(n),
  }))
}