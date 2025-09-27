import { longestCommonPrefix } from './longestCommonPrefix'

describe('Longest Common Prefix', () => {
  it('應返回正確的最長共同前綴', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('')
  })
})