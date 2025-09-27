export function minValue(values: number[]): number {
  const sortedValues = [...new Set(values)].sort().join('')
  return Number(sortedValues)
}