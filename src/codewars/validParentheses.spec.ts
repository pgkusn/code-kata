import { validParentheses } from './validParentheses'

describe('Valid Parentheses', () => {
  it('應返回正確的括號驗證結果', () => {
    expect(validParentheses('()')).toBe(true)
    expect(validParentheses('(())')).toBe(true)
    expect(validParentheses('()()')).toBe(true)
    expect(validParentheses(')(')).toBe(false)
    expect(validParentheses('()()(')).toBe(false)
    expect(validParentheses(')()(')).toBe(false)
  })
})
