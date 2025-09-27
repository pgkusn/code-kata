export function mergeArrays(arr1: number[], arr2: number[]): number[] {
  const setObj = new Set([...arr1, ...arr2])
  return Array.from(setObj).sort((a, b) => a - b)
}