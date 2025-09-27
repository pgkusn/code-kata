import * as R from 'ramda'

export function ipToInt32(ip: string): number {
  const reduce = (x: string[]) => {
    return x.reduce((prev, curr, index) => prev + +curr * Math.pow(2, 24 - 8 * index), 0)
  }
  return R.pipe(R.split('.'), reduce)(ip)
}