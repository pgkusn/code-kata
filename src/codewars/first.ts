export function first<T>(arr: T[], n: number = 1): T[] {
  return arr.slice(0, n)
}