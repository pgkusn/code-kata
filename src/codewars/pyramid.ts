import _ from 'lodash/fp.js'

export function pyramid(n: number): Array<Array<Number>> {
  const result = []
  for (let i = 1; i <= n; i++) {
    result.push(Array(i).fill(1))
  }
  return result

  // another
  // return Array.from({ length: n }, (_, i) => Array(i + 1).fill(1))
}