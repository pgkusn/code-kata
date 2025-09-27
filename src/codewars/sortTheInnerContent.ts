import * as R from 'ramda'

export function sortTheInnerContent(words: string): string {
  const sortWord = (word: string) => {
    if (word.length < 3) return word

    const sortedWord = R.pipe(
      R.slice(1, -1),
      R.sort((a: string, b: string) => b.localeCompare(a)),
      R.join('')
    )([...word])

    return R.head(word) + sortedWord + R.last(word)
  }

  return R.pipe(R.split(' '), R.map(sortWord), R.join(' '))(words)
}