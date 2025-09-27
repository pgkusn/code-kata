import { catMouse } from './catMouse'

describe('Cat and Mouse - Harder Version', () => {
  it('應判斷貓和老鼠的追逐結果', () => {
    expect(catMouse('..D.....Cm', 13)).toBe('Caught!')
    expect(catMouse('............C.............D..m...', 8)).toBe('Escaped!')
    expect(catMouse('m.C...', 5)).toBe('boring without all three')
  })
})
