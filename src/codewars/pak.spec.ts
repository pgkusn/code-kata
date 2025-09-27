import { pak } from './pak'

describe('Holiday VII - Local Talk', () => {
  it('應將單詞之間插入 "pak"', () => {
    expect(pak('Hello world')).toBe('Hello pak world')
    expect(pak('How are you?')).toBe('How pak are pak you?')
    expect(pak(' ')).toBe('')
  })
})
