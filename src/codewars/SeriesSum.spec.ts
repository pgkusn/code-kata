import { SeriesSum } from './SeriesSum'

describe('Sum of the first nth term of Series', () => {
  it('應根據參數中的自然數 n，返回級數的前 n 項之和', () => {
    // 級數：1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
    expect(SeriesSum(1)).toBe('1.00')
    expect(SeriesSum(2)).toBe('1.25')
    expect(SeriesSum(3)).toBe('1.39')
    expect(SeriesSum(4)).toBe('1.49')
  })
})
