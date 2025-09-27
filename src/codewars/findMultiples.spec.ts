import { findMultiples } from './findMultiples'

describe('Find Multiples of a Number', () => {
  it('應回傳正確的倍數數字陣列', () => {
    expect(findMultiples(5, 25)).toEqual([5, 10, 15, 20, 25])
    expect(findMultiples(1, 2)).toEqual([1, 2])
    expect(findMultiples(5, 7)).toEqual([5])
  })
})
