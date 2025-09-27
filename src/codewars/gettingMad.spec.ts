import { gettingMad } from './gettingMad'

describe('Getting MAD', function () {
  it('應處理包含負數的陣列', () => {
    expect(gettingMad([-10, 0, -3, 1])).toBe(1)
  })

  it('應處理包含零的陣列', () => {
    expect(gettingMad([0, 0, 0, 0])).toBe(0)
  })

  it('應處理較大數字', () => {
    expect(gettingMad([-570, 542])).toBe(1112)
    expect(gettingMad([-69, -808, 828, 57])).toBe(126)
  })
})
