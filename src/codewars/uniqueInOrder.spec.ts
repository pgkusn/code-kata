import { uniqueInOrder } from './uniqueInOrder'

describe('Unique In Order', () => {
  it('應返回一個沒有相鄰重複元素的陣列，並保持原有順序', () => {
    expect(uniqueInOrder('AAAABBBCCDAABBB')).toEqual(['A', 'B', 'C', 'D', 'A', 'B'])
  })
})
