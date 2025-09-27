import { removeChar } from './removeChar'

describe('Remove First and Last Character', () => {
  it('應該移除字串的首尾字元', () => {
    expect(removeChar('eloquent')).toBe('loquen')
    expect(removeChar('country')).toBe('ountr')
    expect(removeChar('person')).toBe('erso')
    expect(removeChar('place')).toBe('lac')
  })
})
