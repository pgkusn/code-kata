export function findMultiples(integer: number, limit: number): number[] {
  const result: number[] = []
  for (let n = integer; n <= limit; n += integer) {
    result.push(n)
  }
  return result
}