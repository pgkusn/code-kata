import { diamond } from './diamond'

describe('Give me a Diamond', () => {
  it('當輸入為奇數並大於零時，應返回正確的字串', () => {
    expect(diamond(1)).toBe('*\n')
    expect(diamond(3)).toBe(' *\n***\n *\n')
    expect(diamond(5)).toBe('  *\n ***\n*****\n ***\n  *\n')
  })

  it('當輸入為偶數或小於1時，應返回 null', () => {
    expect(diamond(2)).toBeNull()
    expect(diamond(-3)).toBeNull()
    expect(diamond(0)).toBeNull()
  })
})
