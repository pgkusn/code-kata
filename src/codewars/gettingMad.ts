export function gettingMad(array: number[]): number {
  const values: number[] = []
  array.forEach((a, i) => {
    array.forEach((b, j) => {
      if (i !== j) {
        values.push(Math.abs(a - b))
      }
    })
  })
  return Math.min(...values)
}