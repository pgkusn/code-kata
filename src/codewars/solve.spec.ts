import { solve } from './solve'

describe('Consonant value', function () {
  it('應返回正確的字母值', () => {
    expect(solve('zodiac')).toBe(26)
    expect(solve('chruschtschov')).toBe(80)
    expect(solve('khrushchev')).toBe(38)
    expect(solve('strength')).toBe(57)
    expect(solve('catchphrase')).toBe(73)
    expect(solve('twelfthstreet')).toBe(103)
    expect(solve('mischtschenkoana')).toBe(80)
  })
})
