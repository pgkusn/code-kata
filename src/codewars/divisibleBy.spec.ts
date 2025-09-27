import { divisibleBy } from './divisibleBy'

describe('Find numbers which are divisible by given number', () => {
  it('應返回所有可以被給定除數整除的數字', () => {
    expect(divisibleBy([1, 2, 3, 4, 5, 6], 2)).toEqual([2, 4, 6])
    expect(divisibleBy([10, 20, 30, 40, 50], 5)).toEqual([10, 20, 30, 40, 50]) // 所有數字都可以被 5 整除
    expect(divisibleBy([7, 9, 13, 17, 21], 3)).toEqual([9, 21]) // 只有部分數字可以被 3 整除
    expect(divisibleBy([1, 2, 3, 4, 5, 6], 7)).toEqual([]) // 沒有數字可以被 7 整除
  })
})
