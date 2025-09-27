import { solution } from './solution'

describe('Multiples of 3 or 5', () => {
  it('應找到小於傳入的數字且是 3 或 5 的倍數的所有自然數，並返回這些數字的和', () => {
    expect(solution(10)).toBe(23) // 返回 23 (3 + 5 + 6 + 9)
    expect(solution(20)).toBe(78) // 返回 78 (3 + 5 +  6 + 9 + 10 + 12 + 15 + 18)
  })

  it('如傳入的數字小於 0 時，應返回 0', () => {
    expect(solution(-5)).toBe(0)
  })
})
