import * as fn from './leetcode'

describe('Array Partition', () => {
  it('應該返回正確的數對和', () => {
    expect(fn.arrayPairSum([1, 4, 3, 2])).toBe(4)
    expect(fn.arrayPairSum([6, 2, 6, 5, 1, 2])).toBe(9)
  })
})

describe('Sort Array By Parity', () => {
  it('應該正確排序數組 (偶數在前，奇數在後)', () => {
    // The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted
    expect(fn.sortArrayByParity([3, 1, 2, 4])).toEqual([2, 4, 3, 1])
  })
})

describe('Valid Parentheses', () => {
  it('應返回正確的括號驗證結果', () => {
    expect(fn.isValid('()')).toBe(true)
    expect(fn.isValid('()[]{}')).toBe(true)
    expect(fn.isValid('(]')).toBe(false)
    expect(fn.isValid('([])')).toBe(true)
  })
})

describe('Longest Common Prefix', () => {
  it('應返回正確的最長共同前綴', () => {
    expect(fn.longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
    expect(fn.longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('')
  })
})

describe('Roman to Integer', () => {
  it('應正確轉換羅馬數字為整數', () => {
    expect(fn.romanToInt('III')).toBe(3)
    expect(fn.romanToInt('IV')).toBe(4)
    expect(fn.romanToInt('IX')).toBe(9)
    expect(fn.romanToInt('LVIII')).toBe(58)
    expect(fn.romanToInt('MCMXCIV')).toBe(1994)
  })
})

describe('Two Sum', () => {
  it('應返回兩個數字的索引，它們的和等於目標值', () => {
    expect(fn.twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    expect(fn.twoSum([3, 2, 4], 6)).toEqual([1, 2])
    expect(fn.twoSum([3, 3], 6)).toEqual([0, 1])
    expect(fn.twoSum([1, 2, 3, 4, 5], 9)).toEqual([3, 4])
  })

  it('當沒有解時應返回 [-1, -1]', () => {
    expect(fn.twoSum([1, 2, 3], 10)).toEqual([-1, -1])
  })
})
