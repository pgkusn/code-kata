import { stat } from './stat'

describe('Statistics for an Athletic Association', () => {
  it('應正確計算基本的範圍、平均值和中位數', () => {
    expect(stat('01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17')).toBe(
      'Range: 00|47|18 Average: 01|35|15 Median: 01|32|34'
    )
  })

  it('應正確處理單位數時間', () => {
    expect(stat('2|3|17, 1|7|6, 3|12|20, 1|2|34, 0|5|17')).toBe(
      'Range: 03|07|03 Average: 01|30|06 Median: 01|07|06'
    )
  })

  it('應正確處理空字串', () => {
    expect(stat('')).toBe('')
  })

  it('應正確處理時間相同的案例', () => {
    expect(stat('01|15|00, 01|15|00, 01|15|00')).toBe(
      'Range: 00|00|00 Average: 01|15|00 Median: 01|15|00'
    )
  })

  it('應正確計算偶數個數據的中位數', () => {
    expect(stat('01|15|59, 1|47|6, 01|17|20, 1|32|34')).toBe(
      'Range: 00|31|07 Average: 01|28|14 Median: 01|24|57'
    )
  })
})
