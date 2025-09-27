import { minValue } from './minValue'

describe('Form The Minimum', () => {
  it('當輸入為 [1, 3, 1] 時，應返回 13', () => {
    const expected = 13
    const actual = minValue([1, 3, 1])

    expect(actual).to.eql(expected)
  })

  it('當輸入為 [4, 7, 5, 7] 時，應返回 457', () => {
    const expected = 457
    const actual = minValue([4, 7, 5, 7])

    expect(actual).to.eql(expected)
  })
})
