import { onlyDuplicates } from './onlyDuplicates'

describe('Only Duplicates', () => {
  it('應該返回字串中僅包含重複字符的部分', () => {
    expect(onlyDuplicates('abccdefee')).toBe('cceee')
    expect(onlyDuplicates('hello')).toBe('ll')
    expect(onlyDuplicates('colloquial')).toBe('ollol')
    expect(onlyDuplicates('foundersandcoders')).toBe('ondersndoders')
  })
})
