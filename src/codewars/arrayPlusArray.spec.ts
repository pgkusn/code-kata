import { arrayPlusArray } from './arrayPlusArray'

describe('Array plus array', () => {
  it('應回傳兩個數字陣列的加總', () => {
    expect(arrayPlusArray([1, 2, 3], [4, 5, 6])).toBe(21)
    expect(arrayPlusArray([-1, -2, -3], [-4, -5, -6])).toBe(-21)
    expect(arrayPlusArray([0, 0, 0], [4, 5, 6])).toBe(15)
    expect(arrayPlusArray([100, 200, 300], [400, 500, 600])).toBe(2100)
  })
})
