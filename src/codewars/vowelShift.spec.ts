import { vowelShift } from './vowelShift'

describe('Shift Vowels', () => {
  it('應該能處理範例一 (右移 1)', () => {
    const text = 'This is a test!'
    const result = vowelShift(text, 1)
    expect(result).toBe('Thes is i tast!')
  })

  it('應該能處理範例二 (右移 3)', () => {
    const text = 'This is a test!'
    const result = vowelShift(text, 3)
    expect(result).toBe('This as e tist!')
  })

  it('n = 0 時應該不改變字串', () => {
    const text = 'Hello World'
    const result = vowelShift(text, 0)
    expect(result).toBe('Hello World')
  })

  it('應該能處理負數位移 (左移)', () => {
    const text = 'Hello'
    // vowels: [e, o]
    // shift -1 => [o, e]
    const result = vowelShift(text, -1)
    expect(result).toBe('Holle')
  })

  it('應該能處理超過母音數量的位移 (取餘數)', () => {
    const text = 'Queue'
    // vowels: [u, e, u, e] (共 4 個)
    // shift 6 => shift 2 => [u, e, u, e] → [u, e, u, e] (剛好相同結構)
    const result = vowelShift(text, 6)
    expect(result).toBe('Queue')
  })

  it('應該能處理大小寫混合的母音', () => {
    const text = 'AEiou'
    // vowels: [A, E, i, o, u]
    // shift 1 => [u, A, E, i, o]
    const result = vowelShift(text, 1)
    expect(result).toBe('uAEio')
  })

  it('應該能處理沒有母音的情況', () => {
    const text = 'Rhythm!'
    const result = vowelShift(text, 2)
    expect(result).toBe('Rhythm!')
  })

  it('應該能處理空字串', () => {
    const text = ''
    const result = vowelShift(text, 5)
    expect(result).toBe('')
  })

  it('應該能處理 null 輸入', () => {
    const text = null
    const result = vowelShift(text, 2)
    expect(result).toBe(null)
  })
})
