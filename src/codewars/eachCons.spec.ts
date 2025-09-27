import { eachCons } from './eachCons'

describe('Cascading Subsets', () => {
  it('應返回大小為 n 的列表的級聯子集', () => {
    expect(eachCons([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [2, 3],
      [3, 4],
    ])
    expect(eachCons([1, 2, 3, 4], 3)).toEqual([
      [1, 2, 3],
      [2, 3, 4],
    ])
    expect(eachCons([5, 6, 7, 8, 9], 2)).toEqual([
      [5, 6],
      [6, 7],
      [7, 8],
      [8, 9],
    ])
    expect(eachCons([1, 2, 3, 4, 5, 6], 4)).toEqual([
      [1, 2, 3, 4],
      [2, 3, 4, 5],
      [3, 4, 5, 6],
    ])
    expect(eachCons([], 3)).toEqual([])
  })
  it('如 n 小於 1 時，應返回空陣列', () => {
    expect(eachCons([4, 9, 3], 0)).toEqual([])
  })
  it('如 n 大於陣列長度時，應返回空陣列', () => {
    expect(eachCons([4, 9, 3], 4)).toEqual([])
  })
})
