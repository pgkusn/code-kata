import { feast } from './feast'

describe('The Feast of Many Beasts', () => {
  it('應回傳正確的結果', () => {
    expect(feast('great blue heron', 'garlic naan')).toBe(true)
    expect(feast('chickadee', 'chocolate cake')).toBe(true)
    expect(feast('brown bear', 'bear claw')).toBe(false)
  })
})
