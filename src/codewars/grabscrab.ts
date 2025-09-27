import * as R from 'ramda'

export function grabscrab(anagram: string, dictionary: string[]): string[] {
  const sortString = (s: string) => {
    return R.pipe(
      R.split(''),
      R.sort((a, b) => a.localeCompare(b)),
      R.join('')
    )(s)
  }
  const sortedAnagram = sortString(anagram)

  return R.filter(x => sortString(x) === sortedAnagram, dictionary)
}