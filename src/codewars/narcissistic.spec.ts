import { narcissistic } from './narcissistic'

describe('Does my number look big in this?', () => {
  it('應判斷數字是否為阿姆斯壯數', () => {
    expect(narcissistic(7)).toBe(true)
    expect(narcissistic(153)).toBe(true)
    expect(narcissistic(1634)).toBe(true)
  })
})
