import { sortArray } from './sortArray'

describe('Sort the odd', () => {
  it('應返回正確的數字陣列', () => {
    expect(sortArray([5, 3, 2, 8, 1, 4])).toEqual([1, 3, 2, 8, 5, 4])
    expect(sortArray([5, 3, 1, 8, 0])).toEqual([1, 3, 5, 8, 0])
    expect(sortArray([])).toEqual([])
  })
})
