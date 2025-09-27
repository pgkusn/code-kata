export function addLength(str: string): string[] {
  return str.split(' ').map(s => `${s} ${s.length}`)
}