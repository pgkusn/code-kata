import { decipherThis } from './decipherThis'

describe('Decipher this!', () => {
  it('應返回正確的解密字串', () => {
    expect(decipherThis('')).toBe('')
    expect(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')).toBe(
      'Have a go at this and see how you do'
    )
    expect(decipherThis('65 119esi 111dl 111lw 108dvei 105n 97n 111ka')).toBe(
      'A wise old owl lived in an oak'
    )
  })
})
