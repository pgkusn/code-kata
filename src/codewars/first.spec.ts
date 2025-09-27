import { first } from './first'

describe('pick a set of first elements', () => {
  it('應該返回正確的結果', () => {
    expect(first(['a', 'b', 'c', 'd', 'e'])).toEqual(['a'])
    expect(first(['a', 'b', 'c', 'd', 'e'], 2)).toEqual(['a', 'b'])
    expect(first(['a', 'b', 'c', 'd', 'e'], 3)).toEqual(['a', 'b', 'c'])
    expect(first(['a', 'b', 'c', 'd', 'e'], 0)).toEqual([])
  })
})
