import { isVow } from './isVow'

describe('Is there a vowel in there?', () => {
  it('應回傳正確的陣列內容', () => {
    expect(isVow([118, 117, 120])).toEqual([118, 'u', 120])
    expect(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103])).toEqual([
      'e',
      121,
      110,
      113,
      113,
      103,
      121,
      121,
      'e',
      107,
      103,
    ])
  })
})
