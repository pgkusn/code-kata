import { squareOrSquareRoot } from './squareOrSquareRoot'

describe('To square(root) or not to square(root)', () => {
  it('應回傳平方或平方根的數字陣列', () => {
    expect(squareOrSquareRoot([4, 3, 9, 7, 2, 1])).toEqual([2, 9, 3, 49, 4, 1])
    expect(squareOrSquareRoot([100, 101, 5, 5, 1, 1])).toEqual([10, 10201, 25, 25, 1, 1])
  })
})
