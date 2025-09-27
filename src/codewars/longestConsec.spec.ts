import { longestConsec } from './longestConsec'

describe('Consecutive strings', () => {
  it('應返回最長的字串', () => {
    expect(longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2)).toBe(
      'abigailtheta'
    )
    expect(
      longestConsec(
        ['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'],
        1
      )
    ).toBe('oocccffuucccjjjkkkjyyyeehh')
    expect(longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3)).toBe(
      'ixoyx3452zzzzzzzzzzzz'
    )
  })
})
