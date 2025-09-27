export function toCsvText(array: number[][]): string {
  return array.map(item => item.join()).join('\n')
}