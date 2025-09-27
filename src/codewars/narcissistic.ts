import _ from 'lodash/fp.js'

export function narcissistic(value: number): boolean {
  const result = [...String(value)].reduce((acc, cur, _, array) => {
    return acc + Math.pow(+cur, array.length)
  }, 0)
  return result === value
}