import { present } from './present'

describe('Birthday II - Presents', () => {
  it('應根據描述返回正確的結果', () => {
    expect(present('goodpresent', 9)).toBe('pxxmy{n|nw}')
    expect(present('crap', 10)).toBe('acpr')
    expect(present('bang', 5)).toBe(388)
    expect(present('badpresent', 3)).toBe('Take this back!')
    expect(present('dog', 4)).toBe('pass out from excitement 4 times')
  })
})
