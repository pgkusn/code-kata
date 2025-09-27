import _ from 'lodash/fp.js'

export function drawStairs(n: number): string {
  return [...Array(n)].map((_, i) => ' '.repeat(i) + 'I').join('\n')
}