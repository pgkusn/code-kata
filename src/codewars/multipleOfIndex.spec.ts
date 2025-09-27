import { multipleOfIndex } from './multipleOfIndex'

describe('Multiple of index', () => {
  it('應回傳篩選過後的數字陣列', () => {
    expect(multipleOfIndex([22, -6, 32, 82, 9, 25])).toEqual([-6, 32, 25])
    expect(multipleOfIndex([68, -1, 1, -7, 10, 10])).toEqual([-1, 10])
    expect(multipleOfIndex([0, 2, 3, 6, 9])).toEqual([0, 2, 6])
  })
})
