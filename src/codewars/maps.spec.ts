import { maps } from './maps'

describe('Beginner - Lost Without a Map', () => {
  it('應回傳乘上兩倍後的數字陣列', () => {
    expect(maps([1, 2, 3])).toEqual([2, 4, 6])
    expect(maps([4, 1, 1, 1, 4])).toEqual([8, 2, 2, 2, 8])
  })
})
