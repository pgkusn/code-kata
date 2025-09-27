import { reduceByRules } from './reduceByRules'

describe('Reducing by rules to get the result', () => {
  type RuleFunction = (a: number, b: number) => number

  it('應使用加法和減法規則正確計算', () => {
    const rules: RuleFunction[] = [(a, b) => a + b, (a, b) => a - b]
    expect(reduceByRules([2.0, 2.0, 3.0, 4.0], rules)).toBe(5.0)
  })

  it('應使用單一加法規則正確計算', () => {
    const rules: RuleFunction[] = [(a, b) => a + b]
    expect(reduceByRules([2.0, 2.0, 2.0], rules)).toBe(6.0)
    expect(reduceByRules([2.0, 2.0, 2.0, 2.0], rules)).toBe(8.0)
    expect(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0], rules)).toBe(10.0)
    expect(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0, 2.0], rules)).toBe(12.0)
  })

  it('應使用加法、減法和乘法規則正確計算', () => {
    const rules: RuleFunction[] = [(a, b) => a + b, (a, b) => a - b, (a, b) => a * b]
    expect(reduceByRules([2.0, 2.0, 2.0], rules)).toBe(2.0)
    expect(reduceByRules([2.0, 2.0, 2.0, 2.0], rules)).toBe(4.0)
    expect(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0], rules)).toBe(6.0)
    expect(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0, 2.0], rules)).toBe(4.0)
  })

  it('應使用最小值和最大值規則正確計算', () => {
    const rules: RuleFunction[] = [(a, b) => Math.min(a, b), (a, b) => Math.max(a, b)]
    expect(reduceByRules([1.3, 2.0, 3.3], rules)).toBe(3.3)
    expect(reduceByRules([4.1, 2.2, 2.1, 2.5], rules)).toBe(2.2)
    expect(reduceByRules([8.0, 8.1, 4.1, 12.0, 2.0], rules)).toBe(8.0)
    expect(reduceByRules([2.9, 2.8, 2.7, 2.6, 2.5, 2.4], rules)).toBe(2.4)
  })
})
