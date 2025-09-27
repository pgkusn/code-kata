import { findMissingLetter } from './findMissingLetter'

describe('Find the missing letter', () => {
  it('應返回陣列中缺少的字母', () => {
    expect(findMissingLetter(['a', 'b', 'c', 'd', 'f'])).toBe('e')
    expect(findMissingLetter(['O', 'Q', 'R', 'S'])).toBe('P')
    expect(findMissingLetter([])).toBe('')
  })
})
