import _ from 'lodash/fp.js'

export function findEvenIndex(arr: number[]): number {
  const sum = (num: number[]) => num.reduce((acc, cur) => acc + cur, 0)

  for (let i = 0; i < arr.length; i++) {
    const left = arr.slice(0, i)
    const right = arr.slice(i + 1)

    if (sum(left) === sum(right)) return i
  }

  return -1

  // better
  // return arr.findIndex((_, i, arr) => {
  //   const left = arr.slice(0, i)
  //   const right = arr.slice(i + 1)
  //   return sum(left) === sum(right)
  // })
}