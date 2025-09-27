import * as R from 'ramda'

export function hammingDistance(a: string, b: string): number {
  const countDifferences = (compareStr: string) => (arr: string[]) => {
    return arr.reduce((prev, curr, index) => (curr !== compareStr[index] ? prev + 1 : prev), 0)
  }
  return R.pipe(R.split(''), countDifferences(b))(a)

  // better
  // return R.pipe(
  //   R.split(''),
  //   x => x.filter((x, i) => x !== b[i]),
  //   x => x.length
  // )(a)
}