export function camelCase(str: string): string {
  return str.replace(/\b\w/g, s => s.toUpperCase()).replace(/\s/g, '')
}