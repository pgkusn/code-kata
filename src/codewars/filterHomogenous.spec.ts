import { filterHomogenous } from './filterHomogenous'

describe('Homogenous arrays', () => {
  it('應過濾符合條件的子陣列', () => {
    expect(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]])).toEqual([
      [1, 5, 4],
      ['b'],
    ])

    expect(
      filterHomogenous([[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []])
    ).toEqual([[123, 234, 432], ['', 'abc'], [''], ['', '1']])
  })
})
