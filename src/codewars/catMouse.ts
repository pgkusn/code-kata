import _ from 'lodash/fp.js'

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