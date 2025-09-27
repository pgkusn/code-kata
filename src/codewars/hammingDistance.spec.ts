import { hammingDistance } from './hammingDistance'

describe('Hamming Distance', () => {
  it("字串 'I like turtles' 與 'I like turkeys' 應該回傳 3", () => {
    expect(hammingDistance('I like turtles', 'I like turkeys')).toBe(3)
  })

  it('完全相同的字串應該回傳 0', () => {
    expect(hammingDistance('Hello World', 'Hello World')).toBe(0)
  })

  it("字串 'espresso' 與 'Expresso' 應該回傳 2", () => {
    expect(hammingDistance('espresso', 'Expresso')).toBe(2)
  })

  it("字串 'abc' 與 'xyz' 每個字元都不同 → 回傳 3", () => {
    expect(hammingDistance('abc', 'xyz')).toBe(3)
  })

  it("字串 '12345' 與 '12335' 只有第四個字元不同 → 回傳 1", () => {
    expect(hammingDistance('12345', '12335')).toBe(1)
  })
})
