import { fortune } from './fortune'

describe("Banker's Plan", () => {
  it('應該回傳 true：經典案例（100000, 1, 2000, 15, 1）', () => {
    expect(fortune(100000, 1, 2000, 15, 1)).toBe(true)
  })

  it('應該回傳 true：雖然提款金額大，但還能撐到 10 年', () => {
    expect(fortune(100000, 1, 10000, 10, 1)).toBe(true)
  })

  it('應該回傳 false：在第 12 年破產（100000, 1, 9185, 12, 1）', () => {
    expect(fortune(100000, 1, 9185, 12, 1)).toBe(false)
  })

  it('應該回傳 true：沒有通膨的情況（100000, 1, 2000, 20, 0）', () => {
    expect(fortune(100000, 1, 2000, 20, 0)).toBe(true)
  })

  it('應該回傳 false：高通膨導致生活費急速上升（100000, 1, 2000, 20, 10）', () => {
    expect(fortune(100000, 1, 2000, 20, 10)).toBe(false)
  })

  it('應該回傳 true：高利率抵消通膨（100000, 10, 2000, 20, 5）', () => {
    expect(fortune(100000, 10, 2000, 20, 5)).toBe(true)
  })

  it('應該回傳 false：第一年就不夠提款（1000, 0, 2000, 5, 0）', () => {
    expect(fortune(1000, 0, 2000, 5, 0)).toBe(false)
  })
})
