import * as R from 'ramda'
import _ from 'lodash/fp.js'

export function splitAllEvenNumbers(numbers: number[], way: number): number[] {
  const getOddPairs = (even: number) => {
    const odds = []
    for (let n = 1; n < even; n += 2) {
      odds.push([n, even - n])
    }
    return odds
  }

  const getOddGroups = (even: number) => {
    const odds = []
    for (let n = 1; n < even; n += 2) {
      const m = even / n
      if (Number.isInteger(m)) {
        odds.push(Array(m).fill(n))
      }
    }
    return odds
  }

  const sortByAsc = (a: number, b: number) => a - b

  const sortByDiff = (a: number[], b: number[]) => {
    return Math.abs(a[0] - a[1]) - Math.abs(b[0] - b[1])
  }

  const getArrayItem = (index: number) => (arr: number[]) => arr.at(index)

  // 找最接近的兩個奇數
  const findClosestOdd = (even: number) => {
    return _.pipe(getOddPairs, R.sort(sortByDiff), getArrayItem(0))(even)
  }

  // 找最遠的兩個奇數
  const findFurthestOdd = (even: number) => {
    return _.pipe(getOddPairs, R.sort(sortByDiff), getArrayItem(-1), R.sort(sortByAsc))(even)
  }

  // 轉成相同的最大奇數
  const toSameMaxOdd = (even: number) => {
    return _.pipe(getOddGroups, getArrayItem(-1))(even)
  }

  // 全部變成1
  const toAllOne = (even: number) => {
    return _.pipe(getOddGroups, getArrayItem(0))(even)
  }

  const wayFn = [findClosestOdd, findFurthestOdd, toSameMaxOdd, toAllOne]
  return numbers.flatMap(n => (n % 2 === 0 ? wayFn[way](n) : n))
}