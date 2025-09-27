import { matrixAddition } from './matrixAddition'

describe('Matrix Addition', () => {
  it('應該正確地將兩個1x1矩陣相加', () => {
    expect(matrixAddition([[1]], [[2]])).toEqual([[3]])
  })

  it('應該正確地將兩個2x2矩陣相加', () => {
    expect(
      matrixAddition(
        [
          [1, 2],
          [1, 2],
        ],
        [
          [2, 3],
          [2, 3],
        ]
      )
    ).toEqual([
      [3, 5],
      [3, 5],
    ])
  })

  it('應該正確地將兩個3x3矩陣相加', () => {
    expect(
      matrixAddition(
        [
          [1, 2, 3],
          [3, 2, 1],
          [1, 1, 1],
        ],
        [
          [2, 2, 1],
          [3, 2, 3],
          [1, 1, 3],
        ]
      )
    ).toEqual([
      [3, 4, 4],
      [6, 4, 4],
      [2, 2, 4],
    ])
  })
})
