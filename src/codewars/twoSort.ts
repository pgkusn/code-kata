export function twoSort(s: string[]): string {
  const sortedArray = [...s].sort()
  return sortedArray[0].split('').join('***')
}