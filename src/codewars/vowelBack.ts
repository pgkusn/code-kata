import _ from 'lodash/fp.js'

export function vowelBack(s: string): string {
  const move = (s: string) => {
    const getOffset = (s: string) => {
      if (['a', 'i', 'u'].includes(s)) return -5
      if (['c', 'o'].includes(s)) return -1
      if (s === 'd') return -3
      if (s === 'e') return -4
      return 9
    }
    const toCharCode = (offset: number) => (s: string) => s.charCodeAt(0) + offset
    const handleBoundary = (charCode: number) => {
      if (charCode < 'a'.charCodeAt(0)) {
        return charCode + 26
      }
      if (charCode > 'z'.charCodeAt(0)) {
        return charCode - 26
      }
      return charCode
    }
    const handleReset = (s: string) => (charCode: number) => {
      const chars = ['c', 'o', 'd', 'e']
      const char = String.fromCharCode(charCode)
      const originCharCode = s.charCodeAt(0)
      return chars.includes(char) ? originCharCode : charCode
    }
    const toChar = (n: number) => String.fromCharCode(n)

    const getMovedPosition = _.pipe(
      toCharCode(getOffset(s)),
      handleBoundary,
      handleReset(s),
      toChar
    )
    return getMovedPosition(s)
  }

  const transform = _.pipe(_.split(''), _.map(move), _.join(''))
  return transform(s)
}