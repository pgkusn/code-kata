export function order(words: string): string {
  return words
    .split(' ')
    .sort((a, b) => {
      const [d1] = a.match(/\d/) ?? []
      const [d2] = b.match(/\d/) ?? []
      return Number(d1) - Number(d2)
    })
    .join(' ')
}