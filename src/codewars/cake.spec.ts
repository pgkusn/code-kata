import { cake } from './cake'

describe('Birthday I - Cake', () => {
  it('應返回相應的結果', () => {
    expect(cake(900, 'abcdef')).toBe('That was close!')
    expect(cake(56, 'ifkhchlhfd')).toBe('Fire!')
    expect(cake(256, 'aaaaaddddr')).toBe('Fire!')
  })
})
