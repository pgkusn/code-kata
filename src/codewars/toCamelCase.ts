export function toCamelCase(str: string): string {
  return str.replace(/[_-][A-Za-z]/g, ([, s]) => s.toUpperCase())
}