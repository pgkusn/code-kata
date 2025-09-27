import { findOdd } from './findOdd'

describe('Find the odd int', () => {
  it('應返回出現次數為奇數的數字', () => {
    expect(findOdd([20, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 20, 4, 5, 4])).toBe(5)
    expect(findOdd([10])).toBe(10)
    expect(findOdd([1, 1, 2])).toBe(2)
    expect(findOdd([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 3])).toBe(3)
  })
})
