export function meeting(s: string): string {
  return s
    .toUpperCase()
    .split(';')
    .map(name => `(${name.replace(/(\w+):(\w+)/, '$2, $1')})`)
    .toSorted()
    .join('')
}