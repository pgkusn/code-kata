import { boatLoader } from './boatLoader'

describe("Noye's Fludde", () => {
  it('應將動物成對排列並排除數字', () => {
    expect(boatLoader(['g', 'c', 'h', 'c', 'g', 'm'])).toEqual([
      ['c', 'c'],
      ['g', 'g'],
    ])

    expect(
      boatLoader([
        'a',
        'd',
        'G',
        'V',
        'X',
        'F',
        'g',
        'h',
        's',
        'r',
        'a',
        'g',
        'n',
        's',
        'e',
        'r',
        'j',
        'a',
        'f',
        'D',
        'F',
        'G',
        'R',
        'H',
        'C',
        'X',
        'B',
        'N',
        'G',
        'U',
        'G',
        'F',
        'p',
        's',
        'r',
        'g',
        'a',
      ])
    ).toEqual([
      ['a', 'a'],
      ['F', 'F'],
      ['G', 'G'],
      ['g', 'g'],
      ['r', 'r'],
      ['s', 's'],
      ['X', 'X'],
    ])

    expect(boatLoader(['g', 'g', 'G', 'c', 'p', 'x', 'z', 'Z', 'G', 'c', 'g', 'g'])).toEqual([
      ['c', 'c'],
      ['G', 'G'],
      ['g', 'g'],
    ])

    expect(
      boatLoader([5, 6, 5, 'g', 'g', 'G', 'c', 'p', 'x', 'z', 'Z', 'G', 'c', 'g', 'g'])
    ).toEqual([
      ['c', 'c'],
      ['G', 'G'],
      ['g', 'g'],
    ])
  })
})
