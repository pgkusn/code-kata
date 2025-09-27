import { validBraces } from './validBraces'

describe('Valid Braces', () => {
  it('應驗證括號是否匹配', () => {
    expect(validBraces('()')).toBe(true)
    expect(validBraces('[(])')).toBe(false)
    expect(validBraces('([{}])')).toBe(true)
  })
})
