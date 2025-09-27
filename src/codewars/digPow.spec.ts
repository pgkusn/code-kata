import { digPow } from './digPow'

describe('Playing with digits', () => {
  it('應返回正確的結果', () => {
    expect(digPow(89, 1)).toBe(1) // 返回 1 (因為 8^1 + 9^2 = 89 = 89 * 1)
    expect(digPow(92, 1)).toBe(-1) // 返回 -1 (因為 9^1 + 2^2 = 13，無法被 92 整除)
    expect(digPow(46288, 3)).toBe(51) // 返回 51 (因為 4^3 + 6^4 + 2^5 + 8^6 + 8^7 = 2360688 = 46288 * 51)
  })
})
