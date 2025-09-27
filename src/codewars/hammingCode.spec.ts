import { hammingCode } from './hammingCode'

describe('Error correction #1 - Hamming Code', () => {
  const { encode, decode } = hammingCode()

  it('應該正確編碼字串 "hey"', () => {
    const result = encode('hey')
    expect(result).toBe('000111111000111000000000000111111000000111000111000111111111111000000111')
  })

  it('應該正確解碼字串 "hey" 的編碼結果', () => {
    const encoded = '000111111000111000000000000111111000000111000111000111111111111000000111'
    const decoded = decode(encoded)
    expect(decoded).toBe('hey')
  })

  it('應該可以修正一個位元錯誤並正確解碼', () => {
    // 原本編碼
    let encoded = encode('hi')
    // 模擬一個 bit flip 錯誤
    encoded = encoded.substring(0, 5) + (encoded[5] === '0' ? '1' : '0') + encoded.substring(6)
    const decoded = decode(encoded)
    expect(decoded).toBe('hi')
  })

  it('應該可以處理空字串', () => {
    expect(encode('')).toBe('')
    expect(decode('')).toBe('')
  })
})
