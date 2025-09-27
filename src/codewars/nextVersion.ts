import _ from 'lodash/fp.js'

export function nextVersion(version: string): string {
  const increment = (str: string) => Number(str) + 1
  const toArray = (n: number) => [...`${n}`]
  const transform = (oldVersion: string) => (newVersion: string) => {
    if (newVersion.length !== oldVersion.length) {
      return newVersion.replace('.', '')
    }
    return newVersion
  }

  const getNextVersion = _.pipe(
    _.replace(/\./g, ''),
    increment,
    toArray,
    _.join('.'),
    transform(version)
  )
  return getNextVersion(version)
}