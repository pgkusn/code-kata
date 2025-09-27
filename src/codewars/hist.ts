import _ from 'lodash/fp.js'

export function hist(s: string): string {
  const countChar = (str: string, char: string) => {
    return _.pipe(
      _.split(''),
      _.filter(s => s === char),
      items => items.length
    )(str)
  }

  const formatCharLine = (str: string) => (char: string) => {
    const count = countChar(str, char)
    if (!count) return ''

    const formattedCount = String(count).padEnd(6, ' ')
    const stars = '*'.repeat(count)

    return `${char}  ${formattedCount}${stars}`
  }

  return _.pipe(_.map(formatCharLine(s)), _.filter(Boolean), _.join('\r'))(['u', 'w', 'x', 'z'])
}