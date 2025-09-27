import { sameCase } from './sameCase'

describe('Check same case', function () {
  function doTest(a: string, b: string, expected: number) {
    it(`Testing for "${a}" and "${b}"`, function () {
      expect(sameCase(a, b)).toBe(expected)
    })
  }
  doTest('C', 'B', 1)
  doTest('b', 'a', 1)
  doTest('d', 'd', 1)
  doTest('A', 's', 0)
  doTest('c', 'B', 0)
  doTest('b', 'Z', 0)
  doTest('\t', 'Z', -1)
  doTest('H', ':', -1)
})
