import * as R from 'ramda'

export function arrange(string: string): string {
  const sortByLength = ([...array]: string[]) => {
    for (let i = 0; i < array.length - 1; i++) {
      const current = array[i]
      const next = array[i + 1]

      if (
        (i % 2 === 0 && current.length > next.length) ||
        (i % 2 !== 0 && current.length < next.length)
      ) {
        ;[array[i + 1], array[i]] = [array[i], array[i + 1]]
      }
    }

    return array
  }

  const alternateCase = (array: string[]) => {
    return array.map((x, i) => (i % 2 === 0 ? x.toLowerCase() : x.toUpperCase()))
  }

  return R.pipe(R.split(' '), sortByLength, alternateCase, R.join(' '))(string)
}