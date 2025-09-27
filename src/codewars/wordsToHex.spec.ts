import { wordsToHex } from './wordsToHex'

describe('Words to Hex', () => {
  it('應將每組文字轉換成十六進位', () => {
    expect(wordsToHex('Hello, my name is Gary and I like cheese.')).toEqual([
      '#48656c',
      '#6d7900',
      '#6e616d',
      '#697300',
      '#476172',
      '#616e64',
      '#490000',
      '#6c696b',
      '#636865',
    ])

    expect(wordsToHex('0123456789')).toEqual(['#303132'])

    expect(wordsToHex('ThisIsOneLongSentenceThatConsistsOfWords')).toEqual(['#546869'])

    expect(wordsToHex('Blah blah blah blaaaaaaaaaaaah')).toEqual([
      '#426c61',
      '#626c61',
      '#626c61',
      '#626c61',
    ])

    expect(wordsToHex('&&&&& $$$$$ ^^^^^ @@@@@ ()()()()()')).toEqual([
      '#262626',
      '#242424',
      '#5e5e5e',
      '#404040',
      '#282928',
    ])
  })
})
