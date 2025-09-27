import { grow } from './grow'

describe('Beginner - Reduce but Grow', () => {
  it('應回傳按順序將值相乘的結果', () => {
    expect(grow([1, 2, 3])).toBe(6)
    expect(grow([4, 1, 1, 1, 4])).toBe(16)
    expect(grow([2, 2, 2, 2, 2, 2])).toBe(64)
  })
})
