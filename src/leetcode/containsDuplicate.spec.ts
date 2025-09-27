import { containsDuplicate } from './containsDuplicate'

describe('Contains Duplicate', () => {
  it('應該返回正確的結果 (是否包含重複元素)', () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true)
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false)
  })
})