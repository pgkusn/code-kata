import { countBy } from './countBy'

describe('Count by X', () => {
  it('應返回前 n 個 x 的倍數的陣列', () => {
    expect(countBy(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(countBy(2, 5)).toEqual([2, 4, 6, 8, 10])
    expect(countBy(3, 7)).toEqual([3, 6, 9, 12, 15, 18, 21])
    expect(countBy(4, 3)).toEqual([4, 8, 12])
  })
})
