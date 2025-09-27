import { hist } from './hist'

describe('Errors : histogram', () => {
  it('應該能正確輸出錯誤字母的直方圖 (範例一)', () => {
    const s = 'uuaaaxbbbbyyhwawiwjjjwwxym'
    const result = hist(s)
    const expected = 'u  2     **\r' + 'w  5     *****\r' + 'x  2     **'
    expect(result).toBe(expected)
  })

  it('應該能處理包含大量 z 的情況 (範例二)', () => {
    const s = 'uuaaaxbbbbyyhwawiwjjjwwxym' + 'zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz' // 37 個 z
    const result = hist(s)
    const expected =
      'u  2     **\r' +
      'w  5     *****\r' +
      'x  2     **\r' +
      'z  37    *************************************'
    expect(result).toBe(expected)
  })

  it('當沒有錯誤字母時，應該回傳空字串', () => {
    const s = 'aaabbbcccddd'
    const result = hist(s)
    expect(result).toBe('')
  })

  it('應該能處理只有單一錯誤字母的情況', () => {
    const s = 'zzzz'
    const result = hist(s)
    const expected = 'z  4     ****'
    expect(result).toBe(expected)
  })

  it('應該能處理錯誤字母混在其他字母中的情況', () => {
    const s = 'abcuwxz'
    const result = hist(s)
    const expected = 'u  1     *\r' + 'w  1     *\r' + 'x  1     *\r' + 'z  1     *'
    expect(result).toBe(expected)
  })
})
