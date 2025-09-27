import { quadrant } from './quadrant'

describe('Quadrants', () => {
  const tests = {
    Example: [
      [1, 2, 1],
      [3, 5, 1],
      [-10, 100, 2],
      [-1, -9, 3],
      [19, -56, 4],
    ],
  }
  for (var k of Object.keys(tests)) {
    it(k, () => {
      for (var t of tests[k as keyof typeof tests]) {
        expect(quadrant(t[0], t[1])).toBe(t[2])
      }
    })
  }
})
