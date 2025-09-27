export function uniqueMorseRepresentations(words: string[]): number {
  const morseCodes = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ]

  const transformLetter = (letter: string) => {
    const index = letter.charCodeAt(0) - 'a'.charCodeAt(0)
    return morseCodes[index]
  }

  const transformedWords = words.map(word => {
    return [...word].map(transformLetter).join('')
  })

  return new Set(transformedWords).size
}