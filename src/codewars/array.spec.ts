import { array } from './array'

describe('Remove First and Last Character Part Two', () => {
  it('應刪除第一個和最後一個序列並用空格分隔', () => {
    expect(array('1,2,3')).toBe('2')
    expect(array('1,2,3,4')).toBe('2 3')
    expect(array('1,2,3,4,5')).toBe('2 3 4')
    // 測試空字串的情況
    expect(array('')).toBeNull()
    // 測試只有一個序列的情況
    expect(array('1')).toBeNull()
    // 測試只有兩個序列的情況
    expect(array('1,2')).toBeNull()
  })
})
