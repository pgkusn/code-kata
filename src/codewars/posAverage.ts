import * as R from 'ramda'
import _ from 'lodash/fp.js'

export function posAverage(s: string): number {
  const subStrings = s.split(', ')
  const totalPos = subStrings[0].length
  const totalString = subStrings.length

  const comparePos = ([...a], [...b]) => {
    return a.reduce((prev, curr, index) => (curr === b[index] ? prev + 1 : prev), 0)
  }

  const comparedPos = []
  for (let i = 0; i <= totalString - 2; i++) {
    for (let j = i + 1; j <= totalString - 1; j++) {
      comparedPos.push(comparePos(subStrings[i], subStrings[j]))
    }
  }

  return R.pipe(
    R.reduce((prev, curr: number) => prev + curr / totalPos, 0),
    R.divide(R.__, comparedPos.length),
    R.multiply(100)
  )(comparedPos)
}