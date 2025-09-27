import { posAverage } from './posAverage'

describe('Positions Average', () => {
  it('應該能正確計算範例中 10 個子字串的平均百分比', () => {
    const s = '444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490'
    const result = posAverage(s)
    expect(result).toBeCloseTo(29.2592592593, 9)
  })

  it('兩個完全相同的子字串，應回傳 100%', () => {
    const s = '111111, 111111'
    const result = posAverage(s)
    expect(result).toBeCloseTo(100, 9)
  })

  it('兩個完全不同的子字串，應回傳 0%', () => {
    const s = '111111, 000000'
    const result = posAverage(s)
    expect(result).toBeCloseTo(0, 9)
  })

  it('多個子字串皆相同，應該回傳 100%', () => {
    const s = '1010, 1010, 1010, 1010'
    const result = posAverage(s)
    expect(result).toBeCloseTo(100, 9)
  })

  it('部分子字串有相同位置，應該回傳介於 0% 與 100% 之間的值', () => {
    const s = '12345, 12340, 02345'
    const result = posAverage(s)
    // 這裡只檢查結果是否在合理區間
    expect(result).toBeGreaterThan(0)
    expect(result).toBeLessThan(100)
  })
})
