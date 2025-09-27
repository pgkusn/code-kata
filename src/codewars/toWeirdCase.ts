export function toWeirdCase(string: string): string {
  const mapWord = (word: string) => {
    let result = ''
    for (let i = 0; i < word.length; i++) {
      const char = word[i]
      result += i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    }
    return result
  }

  return string.split(' ').map(mapWord).join(' ')
}