import { maxBall } from './maxBall'

describe('Ball Upwards', () => {
  it('當初速 v0 = 15 km/h 時，應回傳 4（代表 0.4 秒時的量測值最高）', () => {
    expect(maxBall(15)).toBe(4)
  })

  it('當初速 v0 = 25 km/h 時，應回傳 7（代表 0.7 秒時的量測值最高）', () => {
    expect(maxBall(25)).toBe(7)
  })

  it('回傳應為非負整數（測試型別與整數性）', () => {
    const t = maxBall(15)
    expect(typeof t).toBe('number')
    expect(Number.isInteger(t)).toBe(true)
    expect(t).toBeGreaterThanOrEqual(0)
  })
})
