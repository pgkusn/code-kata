import { isPalindrome } from './isPalindrome'

describe('Is it a palindrome?', () => {
  it('如果字串是回文則返回 true，否則返回 false', () => {
    expect(isPalindrome('a')).toBe(true)
    expect(isPalindrome('aba')).toBe(true)
    expect(isPalindrome('Abba')).toBe(true)
    expect(isPalindrome('hello')).toBe(false)
    expect(isPalindrome('Bob')).toBe(true)
    expect(isPalindrome('Madam')).toBe(true)
    expect(isPalindrome('AbBa')).toBe(true)
    expect(isPalindrome('')).toBe(true)
  })
})
