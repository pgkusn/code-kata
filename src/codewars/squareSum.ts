export function squareSum(numbers: number[]): number {
  return numbers.reduce((previous, current) => previous + current ** 2, 0)
}