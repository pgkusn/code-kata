export function insertDash(num: number): string {
  return num.toString().replace(/[13579](?=[13579])/g, '$&-')
}