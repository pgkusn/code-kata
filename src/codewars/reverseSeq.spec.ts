import { reverseSeq } from './reverseSeq'

describe('Reversed sequence', () => {
  it('應返回一個包含整數從 n 到 1 的陣列', () => {
    expect(reverseSeq(5)).toStrictEqual([5, 4, 3, 2, 1])
  })
})
