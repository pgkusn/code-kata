import { firstNonConsecutive } from './firstNonConsecutive'

describe('Find the first non-consecutive number', () => {
  it('應回傳陣列中第一個不連續的數字', () => {
    expect(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])).toBe(6)
  })
  it('如果整個陣列都是連續的，應返回 null', () => {
    expect(firstNonConsecutive([1, 2, 3, 4])).toBe(null)
  })
  it('如果是空陣列，應返回 null', () => {
    expect(firstNonConsecutive([])).toBe(null)
  })
  it('如果陣列中只有一個元素，應返回 null', () => {
    expect(firstNonConsecutive([1])).toBe(null)
  })
})
