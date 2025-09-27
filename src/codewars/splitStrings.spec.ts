import { splitStrings } from './splitStrings'

describe('Split Strings', () => {
  it('應將給定的字串拆分成長度為兩個字元的子串', () => {
    expect(splitStrings('abcdef')).toEqual(['ab', 'cd', 'ef']) // "字串為: 'abcdef'"
    expect(splitStrings('abcdefg')).toEqual(['ab', 'cd', 'ef', 'g_']) // "字串為: 'abcdefg'"
    expect(splitStrings('')).toEqual([]) // "字串為: ''"
  })
})
