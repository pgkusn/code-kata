export function isVow(a: number[]): (number | string)[] {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  return a.map(n => {
    const s = String.fromCharCode(n)
    return vowels.includes(s) ? s : n
  })
}