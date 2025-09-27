import { howMuchILoveYou } from './howMuchILoveYou'

describe('I love you, a little , a lot, passionately ... not at all', () => {
  it('應回傳指定的陣列元素', () => {
    expect(howMuchILoveYou(7)).toBe('I love you')
    expect(howMuchILoveYou(3)).toBe('a lot')
    expect(howMuchILoveYou(6)).toBe('not at all')
  })
})
