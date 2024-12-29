import _ from 'lodash/fp'

export function catMouse(x: string, j: number): string {
  const hasAllAnimals = ['C', 'm', 'D'].every(item => x.includes(item))
  if (!hasAllAnimals) return 'boring without all three'

  const findAnimal = (str: string) => (target: string) => {
    return [...str].findIndex(item => item === target)
  }

  const sliceBetween = (str: string) => {
    return ([a, b]: number[]) => {
      const start = Math.min(a, b)
      const end = Math.max(a, b)
      return str.slice(start, end)
    }
  }

  const getRoute = _.pipe(_.map(findAnimal(x)), sliceBetween(x))
  const route = getRoute(['C', 'm'])

  if (route.length - 1 > j) return 'Escaped!'
  if (route.includes('D')) return 'Protected!'

  return 'Caught!'
}

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
