export function countSmileys(arr: string[]): number {
  return arr.reduce((acc, cur) => {
    if (cur.match(/^[:;][-~]?[)D]$/)) return acc + 1
    return acc
  }, 0)
}