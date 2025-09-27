import { sortTwisted37 } from './sortTwisted37'

describe('Sorting on planet Twisted-3-7', function () {
  it('應該正確排序扭曲的3和7', function () {
    expect(sortTwisted37([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 2, 7, 4, 5, 6, 3, 8, 9])
    expect(sortTwisted37([12, 13, 14])).toEqual([12, 14, 13])
    expect(sortTwisted37([9, 2, 4, 7, 3])).toEqual([2, 7, 4, 3, 9])
    expect(sortTwisted37([-13, -19, -22, -27, -28, -5])).toEqual([-28, -27, -22, -19, -13, -5])
  })
})
