import { sumOfDifferences } from './sumOfDifferences'

describe('Sum of differences in array', () => {
  it('應回傳正確的計算結果', () => {
    expect(sumOfDifferences([1, 2, 10])).toBe(9)
    expect(sumOfDifferences([-3, -2, -1])).toBe(2)
    expect(sumOfDifferences([-17, 17])).toBe(34)
    expect(sumOfDifferences([6, -16, -6, 6, 3, -8, -13])).toBe(22)
    expect(sumOfDifferences([0, 6, -6, -3, 0, -7, -5, 4, 2, 2, 6, 1, 1, 5, 3, -3, 4, -2])).toBe(
      13
    )
  })
  it('如為空陣列或長度為 1 時，應回傳 0', () => {
    expect(sumOfDifferences([])).toBe(0)
    expect(sumOfDifferences([-1])).toBe(0)
  })
})
