import { squareSum } from './squareSum'

describe('Square(n) Sum', () => {
  it('應將每個數字平方後相加', () => {
    expect(squareSum([1, 2, 2])).toBe(9)
    expect(squareSum([3, 4, 5])).toBe(50)
    expect(squareSum([0, 0, 0])).toBe(0) // 所有數字都是 0
    expect(squareSum([2, 2, 2, 2])).toBe(16) // 多個相同的數字
  })
})
