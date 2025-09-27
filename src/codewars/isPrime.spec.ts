import { isPrime } from './isPrime'

describe('Is a number prime?', () => {
  it('應判斷數字是否為質數', () => {
    expect(isPrime(0)).toBe(false)
    expect(isPrime(1)).toBe(false)
    expect(isPrime(2)).toBe(true)
    expect(isPrime(73)).toBe(true)
    expect(isPrime(75)).toBe(false)
    expect(isPrime(-1)).toBe(false)
  })
})
