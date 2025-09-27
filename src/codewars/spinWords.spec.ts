import { spinWords } from './spinWords'

describe('Stop gninnipS My sdroW!', () => {
  it('應反轉句子中五個以上字母的單字', () => {
    expect(spinWords('Welcome')).toBe('emocleW')
    expect(spinWords('Hey fellow warriors')).toBe('Hey wollef sroirraw')
    expect(spinWords('This is a test')).toBe('This is a test')
    expect(spinWords('This is another test')).toBe('This is rehtona test')
    expect(spinWords('You are almost to the last test')).toBe('You are tsomla to the last test')
    expect(spinWords('Just kidding there is still one more')).toBe(
      'Just gniddik ereht is llits one more'
    )
    expect(spinWords('Seriously this is the last one')).toBe('ylsuoireS this is the last one')
  })
})
