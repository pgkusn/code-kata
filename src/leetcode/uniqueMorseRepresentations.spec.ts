import { uniqueMorseRepresentations } from './uniqueMorseRepresentations'

describe('Unique Morse Code Words', () => {
  it('應該返回正確的摩爾斯碼單詞數量 (不重複)', () => {
    expect(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg'])).toBe(2)
  })
})