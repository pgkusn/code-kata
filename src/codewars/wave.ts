export function wave(str: string): Array<string> {
  return Array(str.length)
    .fill(str)
    .map((word, i) => {
      const chars = word.split('')
      chars[i] = chars[i].toUpperCase()
      return chars.join('')

      // better
      // return word.substr(0, i) + word[i].toUpperCase() + word.substr(i + 1)
    })
    .filter(item => item !== str)
}