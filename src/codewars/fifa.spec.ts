import { fifa } from './fifa'

describe('Fifa 17 Launch', () => {
  it('應計算總獲獎金額', () => {
    expect(fifa({ Home: '£75', Away: '£5000', Draw: '£1324' }, ['1-0', '2-3', '0-1'])).toBe(
      '£5075'
    )
  })
})
