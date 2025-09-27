import { logicalCalc } from './logicalCalc'

describe('Logical calculator', () => {
  it('應根據指定的邏輯運算符來計算結果', () => {
    expect(logicalCalc([true, true, false], 'AND')).toBe(false)
    expect(logicalCalc([true, true, false], 'OR')).toBe(true)
    expect(logicalCalc([true, true, false], 'XOR')).toBe(false)
    expect(logicalCalc([false, false, false], 'AND')).toBe(false)
    expect(logicalCalc([true, true, true], 'OR')).toBe(true)
  })
})
