import _ from 'lodash/fp.js'

export function countBy(x: number, n: number): number[] {
  return [...Array(n)].map((_, index) => x * (index + 1))
}