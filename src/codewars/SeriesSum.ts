export function SeriesSum(n: number): string {
  const total = [...Array(n)].reduce((prev, curr, index) => {
    const base = index * 3 + 1
    return prev + 1 / base
  }, 0)
  return total.toFixed(2)
}