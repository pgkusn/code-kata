import { nearestSq } from './nearestSq'

describe('Find Nearest square number', () => {
  it('應回傳正確的結果', () => {
    expect(nearestSq(1)).toBe(1)
    expect(nearestSq(2)).toBe(1)
    expect(nearestSq(10)).toBe(9)
    expect(nearestSq(111)).toBe(121)
    expect(nearestSq(9999)).toBe(10000)
  })
})
