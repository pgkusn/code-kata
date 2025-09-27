import { arrange } from './arrange'

describe('up AND down', () => {
  it("應該能處理範例輸入 'after be arrived two My so'", () => {
    expect(arrange('after be arrived two My so')).toBe('be ARRIVED two AFTER my SO')
  })

  it('當字串已符合規律時，不應改變順序', () => {
    expect(arrange('a BBB cc DDDD')).toBe('a BBB cc DDDD')
  })

  it('當有多個需要交換的地方時，應逐步調整到符合規律', () => {
    expect(arrange('abcd e fgh ij klm')).toBe('e ABCD ij FGH klm')
  })

  it('應正確處理只有一個單字的情況', () => {
    expect(arrange('hello')).toBe('hello')
  })

  it('應正確處理兩個單字的情況', () => {
    expect(arrange('long s')).toBe('s LONG')
  })

  it('應正確處理長度相等的單字', () => {
    expect(arrange('aa bb cc dd')).toBe('aa BB cc DD')
  })
})
