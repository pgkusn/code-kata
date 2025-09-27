export function findAverage(array: number[]): number {
  const total = array.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  return total / array.length || 0
}