import { describe, it, expect } from 'vitest'
import * as fn from './main2'

describe('Reversed sequence', function () {
  it('應返回一個包含整數從 n 到 1 的陣列', function () {
    expect(fn.reverseSeq(5)).toStrictEqual([5, 4, 3, 2, 1])
  })
})
describe('The falling speed of petals', () => {
  it('依據花瓣的下降速度，返回從某一樹枝飄落到地面的時間 (高度固定為400公分)', () => {
    expect(fn.sakuraFall(5)).toBe(80)
    expect(fn.sakuraFall(10)).toBe(40)
  })
  it('如果初始速度為非正數，則返回值應為 0', () => {
    expect(fn.sakuraFall(-1)).toBe(0)
  })
})
