import _ from 'lodash/fp.js'

export function partsSums(ls: number[]): number[] {
  const calculateSum = (numbers: number[]) => {
    return numbers.reduce((prev, curr) => prev + curr, 0)
  }

  const result = ls.map((_, index, array) => {
    const slicedList = array.slice(index)
    return calculateSum(slicedList)
  })

  result.push(0)

  return result

  // better
  // const totalSum = ls.reduce((acc, curr) => acc + curr, 0)
  // const result = [totalSum]

  // for (let i = 0; i < ls.length; i++) {
  //   result.push(result[i] - ls[i])
  // }

  // return result
}