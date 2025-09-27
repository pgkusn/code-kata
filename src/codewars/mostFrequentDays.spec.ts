import { mostFrequentDays } from './mostFrequentDays'

describe('Most Frequent Weekdays', () => {
  it("應該回傳 ['Friday']，因為 2427 年是平年且 1 月 1 日是星期五", () => {
    expect(mostFrequentDays(2427)).toEqual(['Friday'])
  })

  it("應該回傳 ['Saturday']，因為 2185 年是平年且 1 月 1 日是星期六", () => {
    expect(mostFrequentDays(2185)).toEqual(['Saturday'])
  })

  it("應該回傳 ['Thursday', 'Friday']，因為 2860 年是閏年且 1 月 1 日是星期四", () => {
    expect(mostFrequentDays(2860)).toEqual(['Thursday', 'Friday'])
  })

  it("應該回傳 ['Monday']，因為 1900 年是平年且 1 月 1 日是星期一", () => {
    expect(mostFrequentDays(1900)).toEqual(['Monday'])
  })

  it("應該回傳 ['Saturday', 'Sunday']，因為 2000 年是閏年且 1 月 1 日是星期六", () => {
    expect(mostFrequentDays(2000)).toEqual(['Saturday', 'Sunday'])
  })
})
