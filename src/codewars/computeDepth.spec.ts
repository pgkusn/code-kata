import { computeDepth } from './computeDepth'

describe('Integer depth', () => {
  it('應該回傳 9，當 n = 42', () => {
    expect(computeDepth(42)).toBe(9)
  })

  it('應該回傳 10，當 n = 1（需要 10 個倍數才能收集到所有數字）', () => {
    expect(computeDepth(1)).toBe(10)
  })

  it('應該回傳 1，當 n = 9876543210（第一個倍數已經包含所有數字）', () => {
    expect(computeDepth(9876543210)).toBe(1)
  })

  it('應該回傳 13，當 n = 12', () => {
    expect(computeDepth(12)).toBe(13)
  })

  it('應該回傳 10，當 n = 7', () => {
    expect(computeDepth(7)).toBe(10)
  })

  it('應該處理較大的數字，當 n = 12345（結果應為正整數）', () => {
    expect(computeDepth(12345)).toBeGreaterThan(0)
  })
})
