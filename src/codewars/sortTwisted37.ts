import _ from 'lodash/fp.js'

export function sortTwisted37(array: number[]): number[] {
  const toString = (n: number) => n.toString()
  const toNumber = (s: string) => Number(s)
  const replaceBy = (mapping: Record<string, string>) => (s: string) => {
    const keys = Object.keys(mapping).join('')
    const regex = new RegExp(`[${keys}]`, 'g')
    return s.replace(regex, x => (x in mapping ? mapping[x] : x))
  }

  const mapping = { '3': '7', '7': '3' }
  const twist = _.map(_.pipe(toString, replaceBy(mapping), toNumber))
  return _.pipe(twist, _.sortBy(_.identity), twist)(array)
}