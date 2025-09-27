import { getMiddle } from './getMiddle'

describe('Get the Middle Character', () => {
  it('如果單詞的長度是奇數，返回中間字元。如果單詞的長度是偶數，返回中間的 2 個字元', () => {
    expect(getMiddle('test')).toBe('es')
    expect(getMiddle('testing')).toBe('t')
  })
})
