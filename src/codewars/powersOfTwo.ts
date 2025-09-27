import _ from 'lodash/fp.js'

export function powersOfTwo(n: number): number[] {
  return [...Array(n + 1)].map((_, i) => Math.pow(2, i))
}