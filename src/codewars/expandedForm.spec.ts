import { expandedForm } from './expandedForm'

describe('Write Number in Expanded Form', () => {
  it('應返回數字的擴展形式', () => {
    expect(expandedForm(12)).toBe('10 + 2')
    expect(expandedForm(42)).toBe('40 + 2')
    expect(expandedForm(70304)).toBe('70000 + 300 + 4')
  })
})
