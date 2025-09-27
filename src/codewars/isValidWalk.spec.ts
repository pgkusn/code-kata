import { isValidWalk } from './isValidWalk'

describe('Take a Ten Minutes Walk', () => {
  it('如有用十步走完並回到原點，應返回 true', () => {
    expect(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toBe(true)
  })

  it('如未用十步走完並回到原點，應返回 false', () => {
    expect(isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])).toBe(false)
    expect(isValidWalk(['w'])).toBe(false)
    expect(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toBe(false)
  })
})
