import { invert } from './invert'

describe('Invert values', () => {
  it('應將陣列中的正數轉負數，負數轉正數', () => {
    expect(invert([1, 2, 3, 4, 5])).toEqual([-1, -2, -3, -4, -5])
    expect(invert([1, -2, 3, -4, 5])).toEqual([-1, 2, -3, 4, -5])
  })
  it('如為空陣列則回傳空陣列', () => {
    expect(invert([])).toEqual([])
  })
  it('如元素為零則回傳零', () => {
    expect(invert([0])).toEqual([0])
  })
})
