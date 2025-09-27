import { digitize } from './digitize'

describe('Convert number to reversed array of digits', () => {
  it('應返回數字按相反順序排列在陣列中', () => {
    expect(digitize(35231)).toEqual([1, 3, 2, 5, 3])
    expect(digitize(0)).toEqual([0])
    expect(digitize(12345)).toEqual([5, 4, 3, 2, 1])
    expect(digitize(9876543210)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
