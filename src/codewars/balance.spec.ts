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

  it('應該通過 Codewars 測試案例 1（含特殊字元和空行）', () => {
    const input = `1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
`

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

  it('應該通過 Codewars 測試案例 2（多筆交易和金額格式化）', () => {
    const input = `1233.00
125 Hardware;! 24.8?;
123 Flowers 93.5
127 Meat 120.90
120 Picture 34.00
124 Gasoline 11.00
123 Photos;! 71.4?;
122 Picture 93.5
132 Tyres;! 19.00,?;
129 Stamps 13.6
129 Fruits{} 17.6
129 Market;! 128.00?;
121 Gasoline;! 13.6?;`

    const expected = `Original Balance: 1233.00
125 Hardware 24.80 Balance 1208.20
123 Flowers 93.50 Balance 1114.70
127 Meat 120.90 Balance 993.80
120 Picture 34.00 Balance 959.80
124 Gasoline 11.00 Balance 948.80
123 Photos 71.40 Balance 877.40
122 Picture 93.50 Balance 783.90
132 Tyres 19.00 Balance 764.90
129 Stamps 13.60 Balance 751.30
129 Fruits 17.60 Balance 733.70
129 Market 128.00 Balance 605.70
121 Gasoline 13.60 Balance 592.10
Total expense  640.90
Average expense  53.41`

    expect(balance(input)).toBe(expected)
  })
})
