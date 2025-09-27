export function spinWords(str: string): string {
  function reverseWord(word: string): string {
    return word.split('').reverse().join('')
  }
  return str.replace(/\w{5,}/g, word => reverseWord(word))
}