import { monkeyCount } from './monkeyCount'

describe('Count the Monkeys!', () => {
  it('應生成包含從 1 到 n 的所有數字的陣列', () => {
    expect(monkeyCount(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(monkeyCount(1)).toEqual([1])
    expect(monkeyCount(5)).toEqual([1, 2, 3, 4, 5])
    expect(monkeyCount(0)).toEqual([]) // 沒有猴子
  })
})
