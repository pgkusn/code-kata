import { uefaEuro2016 } from './uefaEuro2016'

describe('UEFA EURO 2016', () => {
  it('應該返回正確的比賽結果字串', () => {
    expect(uefaEuro2016(['Germany', 'Ukraine'], [2, 0])).toEqual(
      'At match Germany - Ukraine, Germany won!'
    )
    expect(uefaEuro2016(['Belgium', 'Italy'], [0, 2])).toEqual(
      'At match Belgium - Italy, Italy won!'
    )
    expect(uefaEuro2016(['Portugal', 'Iceland'], [1, 1])).toEqual(
      'At match Portugal - Iceland, teams played draw.'
    )
  })
})
