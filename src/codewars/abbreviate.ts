export function abbreviate(str: string): string {
  const regex = /\b\w{4,}\b/g
  return str.replace(regex, x => {
    const first = x[0]
    const last = x[x.length - 1]
    return `${first}${x.length - 2}${last}`
  })
}