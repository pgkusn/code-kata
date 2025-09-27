export function positiveSum(arr: number[]): number {
  const positiveNumbers = arr.filter(n => n > 0)
  return positiveNumbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}