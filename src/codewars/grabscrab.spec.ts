import { grabscrab } from './grabscrab'

describe('Arrh, grabscrab!', () => {
  it('應該找出與 scramble 字母相同的單字', () => {
    const result = grabscrab('ortsp', ['sport', 'parrot', 'ports', 'matey'])
    expect(result).toEqual(['sport', 'ports'])
  })

  it('若無任何符合單字，應回傳空陣列', () => {
    const result = grabscrab('abc', ['def', 'ghi', 'jkl'])
    expect(result).toEqual([])
  })

  it('應只比對整個單字是否為 anagram，而非部分匹配', () => {
    const result = grabscrab('listen', ['enlists', 'google', 'inlets', 'banana'])
    expect(result).toEqual(['inlets'])
  })

  it('若字典為空，應回傳空陣列', () => {
    const result = grabscrab('abc', [])
    expect(result).toEqual([])
  })

  it('若 scramble 為空，應只匹配空字串', () => {
    const result = grabscrab('', ['', 'a', 'b'])
    expect(result).toEqual([''])
  })
})
