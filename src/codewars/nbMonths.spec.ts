import { nbMonths } from './nbMonths'

describe('Buying a car', () => {
  it('當舊車比新車便宜時應計算正確的月數和剩餘金額', () => {
    expect(nbMonths(2000, 8000, 1000, 1.5)).toEqual([6, 766])
  })

  it('當舊車等於或大於新車時應立即購買', () => {
    expect(nbMonths(12000, 8000, 1000, 1.5)).toEqual([0, 4000])
    expect(nbMonths(8000, 8000, 1000, 1.5)).toEqual([0, 0])
  })
})
