import * as R from 'ramda'

export function longestRepetition(text: string): [string, number] {
  const [longest = ''] = R.pipe(
    R.match(/(.)\1*/g),
    R.sort((a, b) => b.length - a.length)
  )(text)

  return [longest && longest[0], longest.length]
}