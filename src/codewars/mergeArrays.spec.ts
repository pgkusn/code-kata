import { mergeArrays } from './mergeArrays'

describe('Merge two sorted arrays into one', () => {
  it('應回傳一個合併後按照升序排序的陣列', () => {
    expect(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })
  it('應回傳一個合併後不含重複元素的陣列', () => {
    expect(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])).toEqual([
      1, 2, 3, 4, 5, 7, 9, 10, 11, 12,
    ])
  })
})
