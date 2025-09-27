import { findUniq } from './findUniq'

describe('Find the unique number', () => {
  it('應返回陣列中唯一的數字', () => {
    expect(findUniq([1, 1, 1, 2, 1, 1])).toBe(2)
    expect(findUniq([0, 0, 0.55, 0, 0])).toBe(0.55)
  })
})
