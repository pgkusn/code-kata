export function getRealFloor(n: number): number {
  if (n < 1) return n
  if (n > 13) return n - 2
  return n - 1
}