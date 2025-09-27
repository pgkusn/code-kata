import { getLengthOfMissingArray } from './getLengthOfMissingArray'

describe('Length of missing array', function () {
  it('應該正確計算缺失數組的長度', () => {
    expect(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])).toBe(3)
    expect(getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])).toBe(2)
    expect(getLengthOfMissingArray([[null], [null, null, null]])).toBe(2)
    expect(
      getLengthOfMissingArray([
        ['a', 'a', 'a'],
        ['a', 'a'],
        ['a', 'a', 'a', 'a'],
        ['a'],
        ['a', 'a', 'a', 'a', 'a', 'a'],
      ])
    ).toBe(5)
    expect(getLengthOfMissingArray([])).toBe(0)
    expect(getLengthOfMissingArray([[], [1], [2, 3, 3]])).toBe(0)
    expect(getLengthOfMissingArray(null)).toBe(0)
    expect(getLengthOfMissingArray([null, []])).toBe(0)
  })
})
