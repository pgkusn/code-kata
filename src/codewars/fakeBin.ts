export function fakeBin(x: string): string {
  return x
    .split('')
    .map(n => (+n < 5 ? '0' : '1'))
    .join('')
}