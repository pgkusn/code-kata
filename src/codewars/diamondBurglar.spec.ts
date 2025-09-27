import { diamondBurglar } from './diamondBurglar'

describe('How fast can the burglar steal all the diamonds?', () => {
  it('Example 1', () => {
    expect(diamondBurglar(['*.*.*.*.*.', '...*..**..', '**.**...*.', '**..**..**'])).toBe(13)
  })

  it('Example 2', () => {
    expect(diamondBurglar(['..*.*.*...', '.**.*.*.**', '*........*'])).toBe(9)
  })

  it('Example 3', () => {
    expect(
      diamondBurglar([
        '..*....*..',
        '....*.....',
        '*...**....',
        '..**....**',
        '..**..**.*',
        '.*.*.*.**.',
      ])
    ).toBe(14)
  })

  it('Example 4', () => {
    expect(diamondBurglar(['.*...*...*', '..***..*..', '...**.*...', '.***.**..*'])).toBe(12)
  })

  it('Example 5', () => {
    expect(diamondBurglar(['..****..*.', '..***.....', '.*..*...*.', '......**..'])).toBe(9)
  })
})
