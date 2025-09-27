import { between } from './between'

describe('What is between?', () => {
  it('應返回介於兩個數之間（包括兩個數）的所有整數', () => {
    expect(between(1, 4)).toStrictEqual([1, 2, 3, 4])
    expect(between(-2, 2)).toStrictEqual([-2, -1, 0, 1, 2])
  })
})
