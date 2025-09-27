import { arrayPairSum } from './arrayPairSum'

describe('Array Partition', () => {
  it('應該返回正確的數對和', () => {
    expect(arrayPairSum([1, 4, 3, 2])).toBe(4)
    expect(arrayPairSum([6, 2, 6, 5, 1, 2])).toBe(9)
  })
})