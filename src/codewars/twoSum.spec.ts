import { twoSum } from './twoSum'

describe('Two Sum', () => {
  function doTest(numbers: number[], targetSum: number): void {
    const [idx0, idx1] = twoSum(numbers, targetSum) ?? []
    const num0 = numbers[idx0]
    const num1 = numbers[idx1]

    expect(idx0).not.toBe(idx1)
    expect(num0 + num1).toBe(targetSum)
  }

  it('應返回正確的兩個索引值', () => {
    doTest([1, 2, 3], 4)
    doTest([1234, 5678, 9012], 14690)
    doTest([2, 2, 3], 4)
    doTest([2, 3, 1], 3)
  })
})
