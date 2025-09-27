import _ from 'lodash/fp.js'

export function wordsToHex(words: string): string[] {
  const toHexCharCode = (str: string) => str.charCodeAt(0).toString(16)
  const padEnd = (str: string) => str.padEnd(6, '0')
  const addHashTag = (str: string) => `#${str}`

  const toHex = _.pipe(
    _.split(' '),
    _.map(_.pipe(_.slice(0, 3), _.map(toHexCharCode), _.join(''), padEnd, addHashTag))
  )
  return toHex(words)
}