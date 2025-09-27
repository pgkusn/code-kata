import { smallEnough } from './smallEnough'

describe('Small enough? - Beginner', () => {
  it('應該返回布爾值，指示給定數組中的所有元素是否都小於或等於給定的限制值', () => {
    expect(smallEnough([66, 101], 200)).toBe(true)
    expect(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)).toBe(false)
    expect(smallEnough([101, 45, 75, 105, 99, 107], 107)).toBe(true)
    expect(smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)).toBe(true)
    expect(smallEnough([1, 1, 1, 1, 1, 2], 1)).toBe(false)
    expect(smallEnough([78, 33, 22, 44, 88, 9, 6], 87)).toBe(false)
    expect(smallEnough([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)).toBe(true)
    expect(smallEnough([12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12], 12)).toBe(true)
  })
})
