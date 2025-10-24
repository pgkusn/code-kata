import { balance } from './balance'

describe('Easy Balance Checking', () => {
  it('應該正確處理基本的支票簿範例', () => {
    const input = `1000.00
125 Market 125.45
126 Hardware 34.95
127 Video 7.45
128 Book 14.32
129 Gasoline 16.10`

    const expected = `Original Balance: 1000.00
125 Market 125.45 Balance 874.55
126 Hardware 34.95 Balance 839.60
127 Video 7.45 Balance 832.15
128 Book 14.32 Balance 817.83
129 Gasoline 16.10 Balance 801.73
Total expense  198.27
Average expense  39.65`

    expect(balance(input)).toBe(expected)
  })

  it('應該清除非字母數字字元（保留字母、數字、點和空格）', () => {
    const input = `1000.00!
125 Market! 125.45
126 Hardware@ 34.95`

    const expected = `Original Balance: 1000.00
125 Market 125.45 Balance 874.55
126 Hardware 34.95 Balance 839.60
Total expense  160.40
Average expense  80.20`

    expect(balance(input)).toBe(expected)
  })

  it('應該正確處理空白行', () => {
    const input = `1000.00

125 Market 125.45

126 Hardware 34.95`

    const expected = `Original Balance: 1000.00
125 Market 125.45 Balance 874.55
126 Hardware 34.95 Balance 839.60
Total expense  160.40
Average expense  80.20`

    expect(balance(input)).toBe(expected)
  })

  it('應該將金額四捨五入到小數點後兩位', () => {
    const input = `1000.00
125 Market 125.456
126 Hardware 34.955`

    const expected = `Original Balance: 1000.00
125 Market 125.46 Balance 874.54
126 Hardware 34.96 Balance 839.58
Total expense  160.42
Average expense  80.21`

    expect(balance(input)).toBe(expected)
  })
})
