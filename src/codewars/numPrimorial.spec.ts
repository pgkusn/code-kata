import { numPrimorial } from './numPrimorial'

describe('Primorial Of a Number', () => {
  it('應該計算正確的質數乘積', () => {
    expect(numPrimorial(3)).toBe(30) // 2 * 3 * 5 = 30
    expect(numPrimorial(4)).toBe(210)
    expect(numPrimorial(5)).toBe(2310) // 2 * 3 * 5 * 7 * 11 = 2310
    expect(numPrimorial(8)).toBe(9699690)
    expect(numPrimorial(9)).toBe(223092870)
  })
})
