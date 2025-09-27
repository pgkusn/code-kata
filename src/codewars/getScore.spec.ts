import { getScore } from './getScore'

describe('Tetris Series #1 — Scoring System', () => {
  const testing = (arr: number[], exp: number) =>
    it(`Testing for [${arr.join(', ')}]`, () => expect(getScore(arr)).toBe(exp))
  testing([0, 1, 2, 3, 4], 1640)
  testing([0, 1, 1, 3, 0, 2, 1, 2], 620)
  testing([2, 0, 4, 2, 2, 3, 0, 0, 3, 3], 3300)
  testing([0], 0)
  testing([], 0)
  testing([2, 0, 1, 3, 1, 1, 3, 0, 0, 1], 900)
})
