import { humanYearsCatYearsDogYears } from './humanYearsCatYearsDogYears'

describe('Cat years, Dog years', () => {
  it('應回傳人年、貓年、狗年的年齡', () => {
    expect(humanYearsCatYearsDogYears(1)).toEqual([1, 15, 15])
    expect(humanYearsCatYearsDogYears(2)).toEqual([2, 24, 24])
    expect(humanYearsCatYearsDogYears(10)).toEqual([10, 56, 64])
  })
})
