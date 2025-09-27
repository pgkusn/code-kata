import { abbreviate } from './abbreviate'

describe('Word a10n (abbreviation)', () => {
  it('應該能處理基本範例', () => {
    expect(abbreviate('elephant-rides are really fun!')).toBe('e6t-r3s are r4y fun!')
  })

  it('應該能處理短於4個字的單字', () => {
    expect(abbreviate('cat dog rat')).toBe('cat dog rat')
  })

  it('應該能處理剛好4個字的單字', () => {
    expect(abbreviate('book test')).toBe('b2k t2t')
  })

  it('應該能處理包含標點符號的文字', () => {
    expect(abbreviate('internationalization-localization')).toBe('i18n-l10n')
    expect(abbreviate('accessibility, abbreviation!')).toBe('a11y, a10n!')
  })

  it('應該能處理混合長度的單字', () => {
    expect(abbreviate('you and me are programming')).toBe('you and me are p9g')
  })
})
