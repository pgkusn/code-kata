export function eachCons(array: number[], n: number): number[][] {
  if (n < 1 || n > array.length) return []
  const result: number[][] = []
  for (let i = 0; i <= array.length - n; i++) {
    const target = array.slice(i, i + n)
    result.push(target)
  }
  return result
}