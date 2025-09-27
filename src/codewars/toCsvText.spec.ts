import { toCsvText } from './toCsvText'

describe('CSV representation of array', () => {
  it('應將原二維數字陣列轉換成 CSV 格式的字串', () => {
    const input = [
      [0, 1, 2, 3, 4],
      [10, 11, 12, 13, 14],
      [20, 21, 22, 23, 24],
      [30, 31, 32, 33, 34],
    ]
    const output = '0,1,2,3,4\n' + '10,11,12,13,14\n' + '20,21,22,23,24\n' + '30,31,32,33,34'
    expect(toCsvText(input)).toEqual(output)
  })
})
