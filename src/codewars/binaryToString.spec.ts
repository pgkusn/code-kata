import { binaryToString } from './binaryToString'

describe('Binary to Text (ASCII) Conversion', () => {
  it('should decode a binary string to text', () => {
    expect(binaryToString('0100100001100101011011000110110001101111')).toBe('Hello')
  })

  it('should return an empty string for empty input', () => {
    expect(binaryToString('')).toBe('')
  })

  it('should decode a short binary string', () => {
    expect(binaryToString('0100000101000010')).toBe('AB')
  })

  it('should decode numbers and symbols', () => {
    expect(binaryToString('0011000100110010')).toBe('12')
    expect(binaryToString('0010000000100001')).toBe(' !')
  })

  it('should decode extended ASCII values', () => {
    // 195 169 = é (UTF-8 two-byte sequence, but here testing raw byte mapping)
    expect(binaryToString('1100001110101001')).toBe('Ã©')
  })
})
