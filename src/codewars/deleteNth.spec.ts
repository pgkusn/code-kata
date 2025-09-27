import { deleteNth } from './deleteNth'

describe('Delete occurrences of an element if it occurs more than n times', () => {
  it('應刪除多餘次數的元素', () => {
    expect(deleteNth([20, 37, 20, 21], 1)).toEqual([20, 37, 21])
    expect(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)).toEqual([1, 1, 3, 3, 7, 2, 2, 2])
    expect(deleteNth([12, 39, 19, 39, 39, 19, 12], 1)).toEqual([12, 39, 19])
  })
})
