export function countPositivesSumNegatives(input: number[] | null): number[] {
  if (!input || !input.length) return []
  const positivesCount = input.filter(n => n > 0).length
  const negativeTotal = input
    .filter(n => n < 0)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  return [positivesCount, negativeTotal]
}