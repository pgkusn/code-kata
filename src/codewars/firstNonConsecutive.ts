export function firstNonConsecutive(arr: number[]): number | null {
  return arr.find((n, i) => i && n - 1 !== arr[i - 1]) ?? null
}