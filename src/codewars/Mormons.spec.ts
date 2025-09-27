import { Mormons } from './Mormons'

describe('The Book of Mormon', () => {
  it('起始 10 人，目標 9 → 不需傳教', () => {
    expect(Mormons(10, 3, 9)).toBe(0)
  })

  it('起始 40 人，每人轉化 2 人，1 次傳教即可達到 120', () => {
    expect(Mormons(40, 2, 120)).toBe(1)
  })

  it('起始 20000 人，每人轉化 2 人，12 次傳教可達到 70 億', () => {
    expect(Mormons(20000, 2, 7000000000)).toBe(12)
  })

  it('起始 5 人，每人轉化 3 人，需 3 次傳教才能達到至少 200 人', () => {
    expect(Mormons(5, 3, 200)).toBe(3)
  })
})
