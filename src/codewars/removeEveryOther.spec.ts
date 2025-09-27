import { removeEveryOther } from './removeEveryOther'

describe('Removing Elements', () => {
  it('應該保留第一個元素並移除每個第二個元素', () => {
    expect(removeEveryOther(['Keep', 'Remove', 'Keep', 'Remove', 'Keep'])).toEqual([
      'Keep',
      'Keep',
      'Keep',
    ])
    expect(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 3, 5, 7, 9])
    expect(removeEveryOther(['a', 'b', 'c', 'd', 'e', 'f'])).toEqual(['a', 'c', 'e'])
  })
})
