import { thirt } from './thirt'

describe('A Rule of Divisibility by 13', function () {
  it('應正確計算13的整除規則', () => {
    expect(thirt(8529)).toBe(79)
    expect(thirt(85299258)).toBe(31)
  })
})
