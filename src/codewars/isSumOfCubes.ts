import * as R from 'ramda'

export function isSumOfCubes(s: string): string {
  const findCubes = (n: string) => {
    const sum = R.pipe(
      R.split(''),
      R.reduce((prev, curr) => prev + (+curr) ** 3, 0)
    )(n)
    return sum === +n
  }

  const formatString = (array: number[]) => {
    if (!array.length) return 'Unlucky'
    return [...array, R.sum(array), 'Lucky'].join(' ')
  }

  return R.pipe(R.match(/\d{1,3}/g), R.filter(findCubes), R.map(Number), formatString)(s)
}