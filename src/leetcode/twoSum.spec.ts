import { twoSum } from './twoSum'

describe('Two Sum', () => {
  it('應返回兩個數字的索引，它們的和等於目標值', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
    expect(twoSum([3, 3], 6)).toEqual([0, 1])
    expect(twoSum([1, 2, 3, 4, 5], 9)).toEqual([3, 4])
  })

  it('當沒有解時應返回 [-1, -1]', () => {
    expect(twoSum([1, 2, 3], 10)).toEqual([-1, -1])
  })
})