import { abbrevName } from './abbrevName'

describe('Abbreviate a Two Word Name', () => {
  it('應該返回正確的縮寫', () => {
    expect(abbrevName('Sam Harris')).toBe('S.H')
    expect(abbrevName('Patrick Feenan')).toBe('P.F')
    expect(abbrevName('R Favuzzi')).toBe('R.F')
  })
})
