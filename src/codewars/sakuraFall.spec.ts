import { sakuraFall } from './sakuraFall'

describe('The falling speed of petals', () => {
  it('依據花瓣的下降速度，返回從某一樹枝飄落到地面的時間 (高度固定為400公分)', () => {
    expect(sakuraFall(5)).toBe(80)
    expect(sakuraFall(10)).toBe(40)
  })
  it('如果初始速度為非正數，則返回值應為 0', () => {
    expect(sakuraFall(-1)).toBe(0)
  })
})
