import { findAverage } from './findAverage'

describe('Calculate average', () => {
  it('應回傳正確的平均數字', () => {
    expect(findAverage([1, 1, 1])).toBe(1)
    expect(findAverage([1, 2, 3])).toBe(2)
    expect(findAverage([1, 2, 3, 4])).toBe(2.5)
  })
  it('如為空陣列應回傳0', () => {
    expect(findAverage([])).toEqual(0)
  })
})
