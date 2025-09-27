import { splitAllEvenNumbers } from './splitAllEvenNumbers'

describe('Split all even numbers to odd ones in different ways', function () {
  it('當第二個參數為 0 時，應將偶數拆分最接近的兩個奇數', () => {
    expect(splitAllEvenNumbers([1, 10, 1, 3], 0)).toEqual([1, 5, 5, 1, 3])
    expect(splitAllEvenNumbers([1, 1, 3, 8], 0)).toEqual([1, 1, 3, 3, 5])
  })

  it('當第二個參數為 1 時，應將偶數拆分成最遠的兩個奇數', () => {
    expect(splitAllEvenNumbers([1, 10, 1, 3], 1)).toEqual([1, 1, 9, 1, 3])
    expect(splitAllEvenNumbers([1, 1, 3, 8], 1)).toEqual([1, 1, 3, 1, 7])
  })

  it('當第二個參數為 2 時，應將偶數拆分成相同的最大奇數', () => {
    expect(splitAllEvenNumbers([1, 10, 1, 3], 2)).toEqual([1, 5, 5, 1, 3])
    expect(splitAllEvenNumbers([1, 1, 3, 8], 2)).toEqual([1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1])
  })

  it('當第二個參數為 3 時，應將偶數全部拆分成 1', () => {
    expect(splitAllEvenNumbers([1, 10, 1, 3], 3)).toEqual([
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3,
    ])
    expect(splitAllEvenNumbers([1, 1, 3, 8], 3)).toEqual([1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1])
  })
})
