import { all } from './all'

describe('Enumerable Magic #1 - True for All?', () => {
  it('應根據函數返回值判斷是否全部符合條件', () => {
    expect(all([1, 2, 3, 4, 5], v => v < 9)).toBe(true)
    expect(all([1, 2, 3, 4, 5], v => v > 9)).toBe(false)
  })
})
