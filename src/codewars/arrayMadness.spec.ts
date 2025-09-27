import { arrayMadness } from './arrayMadness'

describe('Array Madness', () => {
  it('應該返回 true 如果 a 中每個元素的平方和大於 b 中每個元素的立方和', () => {
    expect(arrayMadness([4, 5, 6], [1, 2, 3])).toBe(true)
    expect(arrayMadness([1, 2, 3], [4, 5, 6])).toBe(false)
    expect(arrayMadness([1, 2, 3, 4], [1, 2, 3])).toBe(false)
    expect(arrayMadness([2, 3, 4], [1, 2, 3, 4])).toBe(false)
    expect(arrayMadness([1, 2, 3], [3, 2, 1])).toBe(false)
  })
})
