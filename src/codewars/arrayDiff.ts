export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter(n => !b.includes(n))
}