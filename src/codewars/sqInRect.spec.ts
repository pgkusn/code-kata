import { sqInRect } from './sqInRect'

describe('Rectangle into Squares', () => {
  function testing(l: number, w: number, expected: number[] | null): void {
    expect(sqInRect(l, w)).toEqual(expected)
  }

  it('應返回正確的正方形邊長', () => {
    testing(5, 5, null)
    testing(5, 3, [3, 2, 1, 1])
    testing(3, 5, [3, 2, 1, 1])
    testing(20, 14, [14, 6, 6, 2, 2, 2])
    testing(14, 20, [14, 6, 6, 2, 2, 2])
  })
})
