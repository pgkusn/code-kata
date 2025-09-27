import { isSumOfCubes } from './isSumOfCubes'

describe('Hidden "Cubic" numbers', () => {
  it('範例一：包含 cubic 數字 0, 1, 153', () => {
    const input = 'aqdf&0#1xyz!22[153(777.777'
    const result = isSumOfCubes(input)
    expect(result).toBe('0 1 153 154 Lucky')
  })

  it('範例二：不包含 cubic 數字', () => {
    const input = 'QK29a45[&erui9026315'
    const result = isSumOfCubes(input)
    expect(result).toBe('Unlucky')
  })

  it('測試連續數字分組（001234 → 001, 234）', () => {
    const input = '001234'
    const result = isSumOfCubes(input)
    // 001 = 1，234 不是 cubic
    expect(result).toBe('1 1 Lucky')
  })

  it('測試分割 4 位數字（0785 → 078, 5）', () => {
    const input = '0785'
    const result = isSumOfCubes(input)
    // 078 = 78 (不是 cubic)，5 不是 cubic
    expect(result).toBe('Unlucky')
  })

  it('測試多個 cubic 數字混合', () => {
    const input = '153000370407'
    // groups: 153, 000, 370, 407
    // 153 (cubic), 000 = 0 (cubic), 370 (cubic), 407 (cubic)
    // sum = 930
    const result = isSumOfCubes(input)
    expect(result).toBe('153 0 370 407 930 Lucky')
  })

  it('測試單一 cubic 數字 370', () => {
    const input = '370'
    const result = isSumOfCubes(input)
    expect(result).toBe('370 370 Lucky')
  })

  it('測試單一非 cubic 數字 200', () => {
    const input = '200'
    const result = isSumOfCubes(input)
    expect(result).toBe('Unlucky')
  })

  it('空字串應該回傳 Unlucky', () => {
    const input = ''
    const result = isSumOfCubes(input)
    expect(result).toBe('Unlucky')
  })
})
