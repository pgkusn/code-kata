export function findOdd(numbers: number[]): number {
  const numberCount: { [key: string]: number } = {}

  for (const n of numbers) {
    if (!numberCount[n]) {
      numberCount[n] = 0
    }
    numberCount[n]++
  }

  const key = Object.keys(numberCount).find(n => numberCount[n] % 2 !== 0)
  return Number(key)
}