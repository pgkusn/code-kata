import { flip } from './flip'

describe('Gravity Flip', () => {
  it('如第一個參數傳入 R 時，應回傳升冪排序的陣列', () => {
    expect(flip('R', [3, 2, 1, 2])).toEqual([1, 2, 2, 3])
  })
  it('如第一個參數傳入 L 時，應回傳降冪排序的陣列', () => {
    expect(flip('L', [1, 4, 5, 3, 5])).toEqual([5, 5, 4, 3, 1])
  })
})
