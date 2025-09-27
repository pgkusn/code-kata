import { insertDash } from './insertDash'

describe('Insert dashes', () => {
  it('應返回正確的字串', () => {
    expect(insertDash(454793)).toBe('4547-9-3')
    expect(insertDash(123456)).toBe('123456')
    expect(insertDash(1003567)).toBe('1003-567')
  })
})
