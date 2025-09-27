import { isValid } from './isValid'

describe('Valid Parentheses', () => {
  it('應返回正確的括號驗證結果', () => {
    expect(isValid('()')).toBe(true)
    expect(isValid('()[]{}')).toBe(true)
    expect(isValid('(]')).toBe(false)
    expect(isValid('([])')).toBe(true)
  })
})