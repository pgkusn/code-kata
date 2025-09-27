import { manhattanDistance } from './manhattanDistance'

describe('Manhattan distance', () => {
  it('應該正確計算曼哈頓距離', () => {
    expect(manhattanDistance([1, 1], [1, 1])).toBe(0)
    expect(manhattanDistance([5, 4], [3, 2])).toBe(4)
    expect(manhattanDistance([1, 1], [0, 3])).toBe(3)
  })
})
