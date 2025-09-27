import { decrypt } from './decrypt'
import { encrypt } from './encrypt'

describe('Simple Encryption #1 - Alternating Split', () => {
  it('應返回正確的加密字串', () => {
    expect(encrypt('This is a test!', 0)).toBe('This is a test!')
    expect(encrypt('This is a test!', 1)).toBe('hsi  etTi sats!')
    expect(encrypt('This is a test!', 2)).toBe('s eT ashi tist!')
    expect(encrypt('This is a test!', 3)).toBe(' Tah itse sits!')
    expect(encrypt('This is a test!', 4)).toBe('This is a test!')
    expect(encrypt('This is a test!', -1)).toBe('This is a test!')
    expect(encrypt('This kata is very interesting!', 1)).toBe('hskt svr neetn!Ti aai eyitrsig')
  })

  it('應返回正確的解密字串', () => {
    expect(decrypt('This is a test!', 0)).toBe('This is a test!')
    expect(decrypt('hsi  etTi sats!', 1)).toBe('This is a test!')
    expect(decrypt('s eT ashi tist!', 2)).toBe('This is a test!')
    expect(decrypt(' Tah itse sits!', 3)).toBe('This is a test!')
    expect(decrypt('This is a test!', 4)).toBe('This is a test!')
    expect(decrypt('This is a test!', -1)).toBe('This is a test!')
    expect(decrypt('hskt svr neetn!Ti aai eyitrsig', 1)).toBe('This kata is very interesting!')
  })

  it('當傳入的第一個參數為空字串或 null，應直接回傳第一個參數', () => {
    expect(encrypt('', 0)).toBe('')
    expect(decrypt('', 0)).toBe('')
    expect(encrypt(null, 0)).toBeNull()
    expect(decrypt(null, 0)).toBeNull()
  })
})
