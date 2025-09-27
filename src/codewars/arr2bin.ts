export function arr2bin(arr: any[]): string {
  if (arr.includes(NaN)) return 'NaN'
  const total = arr.reduce((previousValue, currentValue) => {
    return previousValue + (Number.isInteger(currentValue) ? currentValue : 0)
  }, 0)
  return total.toString(2)
}