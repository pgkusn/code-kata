import { realNumbers } from './realNumbers'

describe('Mysterious Singularity Numbers', function () {
  it('應返回正確的數字', function () {
    let arr = [
      [5, 1],
      [10, 2],
      [20, 6],
      [30, 8],
      [40, 10],
      [55, 15],
      [66, 17],
      [75, 20],
      [100, 26],
    ]
    for (let [n, expected] of arr) {
      let actual = realNumbers(n)
      expect(actual).toBe(expected)
    }
  })
})
