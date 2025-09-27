import { power } from './power'

describe('Potenciation', () => {
  it('應返回 x 的 y 次方', () => {
    expect(power(1, 701270)).toBe(1)
    expect(power(2, 2)).toBe(4)
    expect(power(3, 2)).toBe(9)
    expect(power(-1, 40)).toBe(1)
  })
})
