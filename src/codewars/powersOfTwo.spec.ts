import { powersOfTwo } from './powersOfTwo'

describe('Powers of 2', () => {
  it('應返回 2 的次方數組', () => {
    expect(powersOfTwo(0)).toStrictEqual([1])
    expect(powersOfTwo(1)).toStrictEqual([1, 2])
    expect(powersOfTwo(4)).toStrictEqual([1, 2, 4, 8, 16])
  })
})
