import { isPangram } from './isPangram'

describe('Detect Pangram', () => {
  it('應判斷是否為全字母句', () => {
    expect(isPangram('The quick brown fox jumps over the lazy dog.')).toBe(true) // 'The quick brown fox jumps over the lazy dog.' 是全字母句
    expect(isPangram('This is not a pangram.')).toBe(false) // 'This is not a pangram.' 不是全字母句
    expect(isPangram('123')).toBe(false)
  })
})
