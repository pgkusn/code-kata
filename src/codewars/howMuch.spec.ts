import { howMuch } from './howMuch'

describe('How Much?', () => {
  it('基本案例：範圍 1~100，應回傳兩組解', () => {
    expect(howMuch(1, 100)).toEqual([
      ['M: 37', 'B: 5', 'C: 4'],
      ['M: 100', 'B: 14', 'C: 11'],
    ])
  })

  it('基本案例：範圍 1000~1100，應回傳一組解', () => {
    expect(howMuch(1000, 1100)).toEqual([['M: 1045', 'B: 149', 'C: 116']])
  })

  it('基本案例：單點區間 2950~2950 無解', () => {
    expect(howMuch(2950, 2950)).toEqual([])
  })

  it('題目延伸案例：範圍 0~200，應回傳三組解', () => {
    expect(howMuch(0, 200)).toEqual([
      ['M: 37', 'B: 5', 'C: 4'],
      ['M: 100', 'B: 14', 'C: 11'],
      ['M: 163', 'B: 23', 'C: 18'],
    ])
  })

  it('題目延伸案例：範圍 10000~9950（m>n）也應能正確處理', () => {
    expect(howMuch(10000, 9950)).toEqual([['M: 9991', 'B: 1427', 'C: 1110']])
  })

  it('無解區間：例如 38~99（不含 37 與 100），應回傳空陣列', () => {
    expect(howMuch(38, 99)).toEqual([])
  })

  it('單一解邊界：範圍剛好只含 37，應回傳對應的一組解', () => {
    expect(howMuch(37, 37)).toEqual([['M: 37', 'B: 5', 'C: 4']])
  })

  it('結果排序：M 值應由小到大排序（當多組解存在時）', () => {
    const res = howMuch(0, 200)
    const mValues = res.map(([m]) => Number(m.split(': ')[1]))
    const sorted = [...mValues].sort((a, b) => a - b)
    expect(mValues).toEqual(sorted)
  })

  it('字串格式：每組結果都應為 ["M: f","B: b","C: c"] 的三元素字串陣列', () => {
    const res = howMuch(0, 200)
    for (const triple of res) {
      expect(Array.isArray(triple)).toBe(true)
      expect(triple).toHaveLength(3)
      expect(triple[0]).toMatch(/^M: \d+$/)
      expect(triple[1]).toMatch(/^B: \d+$/)
      expect(triple[2]).toMatch(/^C: \d+$/)
    }
  })
})
