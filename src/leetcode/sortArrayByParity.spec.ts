import { sortArrayByParity } from './sortArrayByParity'

describe('Sort Array By Parity', () => {
  it('應該正確排序數組 (偶數在前，奇數在後)', () => {
    // The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted
    expect(sortArrayByParity([3, 1, 2, 4])).toEqual([2, 4, 3, 1])
  })
})