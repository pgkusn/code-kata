export function arrayPlusArray(arr1: number[], arr2: number[]): number {
  const arr = [...arr1, ...arr2]
  return arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}