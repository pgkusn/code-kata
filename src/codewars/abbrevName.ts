export function abbrevName(name: string): string {
  return name
    .split(' ')
    .map(([s]) => s.toUpperCase())
    .join('.')
}