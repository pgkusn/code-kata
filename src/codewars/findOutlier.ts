export function findOutlier(numbers: number[]): number {
  const oddNumbers = numbers.filter(n => n % 2 !== 0)
  const evenNumbers = numbers.filter(n => n % 2 === 0)
  return oddNumbers.length === 1 ? oddNumbers[0] : evenNumbers[0]
}