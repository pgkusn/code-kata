import { getAverage } from './getAverage'

describe('Get the mean of an array', () => {
  it('應計算並返回平均成績', () => {
    expect(getAverage([2, 2, 2, 2])).toBe(2)
    expect(getAverage([1, 2, 3, 4, 5])).toBe(3)
    expect(getAverage([1, 1, 1, 1, 1, 1, 1, 2])).toBe(1)
  })
  it('當平均成績有小數點時，應無條件捨去', () => {
    expect(getAverage([85, 90, 92, 88, 78])).toBe(86)
  })
})
