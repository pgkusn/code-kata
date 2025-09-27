export function sumTwoSmallestNumbers(numbers: number[]): number {
  const [a, b] = [...numbers].sort((a, b) => a - b)
  return a + b
}