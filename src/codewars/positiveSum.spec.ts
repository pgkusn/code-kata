import { positiveSum } from './positiveSum'

describe('Sum of positive', () => {
  it('應該返回所有正數的總和', () => {
    expect(positiveSum([1, -4, 7, 12])).toBe(20)
    expect(positiveSum([-1, -4, -7])).toBe(0) // 沒有正數，應該返回 0
    expect(positiveSum([])).toBe(0) // 空陣列，應該返回 0
    expect(positiveSum([0, 0, 0])).toBe(0) // 沒有正數，應該返回 0
    expect(positiveSum([1, 2, 3, 4, 5])).toBe(15) // 所有元素都是正數
  })
})
