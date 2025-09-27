import _ from 'lodash/fp.js'

export function findRoutes(routes: string[][]): string {
  const isStarting = (target: string, routes: string[][]) => {
    return routes.every(([, end]) => end !== target)
  }

  const findStarting = (routes: string[][]) => {
    return routes.find(([start], index, array) => isStarting(start, array)) || []
  }

  const getRoutes = (routes: string[][]) => (starting: string[]) => {
    return routes.reduce((prev, curr, index, array) => {
      const [, nextEnd] = array.find(([start]) => start === prev.at(-1)) || []
      if (nextEnd) prev.push(nextEnd)
      return prev
    }, starting)
  }

  return _.pipe(findStarting, getRoutes(routes), _.join(', '))(routes)
}