import { arrayDiff } from './arrayDiff'

describe('Array.diff', () => {
  it('假設兩個陣列 a 和 b，將 a 中存在於 b 中的元素刪除並返回結果', () => {
    expect(arrayDiff([], [4, 5])).toEqual([])
    expect(arrayDiff([3, 4], [3])).toEqual([4])
    expect(arrayDiff([1, 8, 2], [])).toEqual([1, 8, 2])
    expect(arrayDiff([1, 2, 3], [1, 2])).toEqual([3])
  })
})
