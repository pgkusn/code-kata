import { latestClock } from './latestClock'

describe('The latest clock', () => {
  it('應該回傳 "19:38" 當輸入為 1, 9, 8, 3', () => {
    expect(latestClock(1, 9, 8, 3)).toBe('19:38')
  })

  it('應該回傳 "21:59" 當輸入為 9, 1, 2, 5（而非 19:25）', () => {
    expect(latestClock(9, 1, 2, 5)).toBe('21:59')
  })

  it('應該回傳有效的 24 小時制時間格式 HH:MM', () => {
    const result = latestClock(0, 0, 0, 0)
    expect(result).toMatch(/^([01]\d|2[0-3]):[0-5]\d$/)
  })

  it('應該回傳介於 00:00 和 23:59 之間的時間', () => {
    const result = latestClock(2, 3, 5, 9)
    const [hours, minutes] = result.split(':').map(Number)
    expect(hours).toBeGreaterThanOrEqual(0)
    expect(hours).toBeLessThanOrEqual(23)
    expect(minutes).toBeGreaterThanOrEqual(0)
    expect(minutes).toBeLessThanOrEqual(59)
  })
})
