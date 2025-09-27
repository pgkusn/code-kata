import _ from 'lodash/fp.js'

export function multiTable(number: number): string {
  return [...Array(10)].map((_, i) => `${i + 1} * ${number} = ${(i + 1) * number}`).join('\n')
}