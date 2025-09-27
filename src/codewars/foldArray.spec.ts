import { foldArray } from './foldArray'

describe('Fold an array', () => {
  it('應返回折疊後的陣列', () => {
    let input = [1, 2, 3, 4, 5]
    let expected = [6, 6, 3]
    expect(foldArray(input, 1)).toEqual(expected)

    expected = [9, 6]
    expect(foldArray(input, 2)).toEqual(expected)

    expected = [15]
    expect(foldArray(input, 3)).toEqual(expected)

    input = [-9, 9, -8, 8, 66, 23]
    expected = [14, 75, 0]
    expect(foldArray(input, 1)).toEqual(expected)
  })
})
