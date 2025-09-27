export function breakCamelCase(string: string): string {
  return string.replace(/[A-Z]/g, s => ` ${s}`)

  // better
  // return string.replace(/([A-Z])/g, ' $1')
}