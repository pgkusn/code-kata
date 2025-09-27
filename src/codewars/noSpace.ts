export function noSpace(x: string): string {
  return x
    .split('')
    .filter(s => s.trim())
    .join('')
}