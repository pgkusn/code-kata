import { deadAntCount } from './deadAntCount'

describe('Dead Ants', () => {
  it('當字串中只有完整的螞蟻時，應回傳 0', () => {
    expect(deadAntCount('ant ant ant ant')).toBe(0)
  })

  it('當輸入為 null 時，應回傳 0', () => {
    expect(deadAntCount(null)).toBe(0)
  })

  it('當有不完整的螞蟻時，應正確計算死亡螞蟻數量', () => {
    expect(deadAntCount('ant anantt aantnt')).toBe(2)
  })

  it('當螞蟻被打散時，應計算出正確的死亡螞蟻數量', () => {
    expect(deadAntCount('ant ant .... a nt')).toBe(1)
  })
})
