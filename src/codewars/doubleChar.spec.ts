import { doubleChar } from './doubleChar'

describe('Double Char', () => {
  it('應將字串中的每個字元重複一次', () => {
    expect(doubleChar('abcd')).toBe('aabbccdd')
    expect(doubleChar('Adidas')).toBe('AAddiiddaass')
    expect(doubleChar('1337')).toBe('11333377')
    expect(doubleChar('illuminati')).toBe('iilllluummiinnaattii')
    expect(doubleChar('123456')).toBe('112233445566')
    expect(doubleChar('%^&*(')).toBe('%%^^&&**((')
  })
})
