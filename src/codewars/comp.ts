export function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (!a1 || !a2) return false

  a1.sort((a, b) => a - b)
  a2.sort((a, b) => a - b)

  return a2.every((n, i) => n === a1[i] ** 2)
}