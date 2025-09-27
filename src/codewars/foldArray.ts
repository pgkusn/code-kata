import * as R from 'ramda'
import _ from 'lodash/fp.js'

export function foldArray(array: number[], runs: number): number[] {
  const removeArray = (items: number[]) => {
    const spliced = [...items]
    const index = items.length % 2 === 0 ? items.length / 2 : (items.length + 1) / 2
    const removed = spliced.splice(index)
    return [removed, spliced]
  }

  const reverseArray = ([ary1, ary2]: number[][]) => {
    let a = [...ary1]
    let b = [...ary2]

    if (b.length < a.length) {
      b.reverse()
    } else {
      a.reverse()
    }

    return [a, b]
  }

  const mergeArray = ([a, b]: number[][]) => {
    return Array.from({ length: Math.max(a.length, b.length) }).reduce(
      (prev: number[], _, index) => {
        const n = a[index] || 0
        const m = b[index] || 0
        prev[index] = n + m
        return prev
      },
      []
    )
  }

  const merged = R.pipe(removeArray, reverseArray, mergeArray)(array)
  runs--

  if (runs > 0) {
    return foldArray(merged, runs)
  }

  return merged
}