import { backwardsPrime } from './backwardsPrime'

describe('Backwards Read Primes', () => {
  it('應該回傳 2 到 100 之間的所有反轉質數', () => {
    expect(backwardsPrime(2, 100)).toEqual([13, 17, 31, 37, 71, 73, 79, 97])
  })

  it('若範圍內沒有反轉質數，應該回傳空陣列', () => {
    expect(backwardsPrime(501, 599)).toEqual([])
  })

  it('應該正確回傳 9900 到 10000 之間的反轉質數', () => {
    expect(backwardsPrime(9900, 10000)).toEqual([9923, 9931, 9941, 9967])
  })

  it('若只有一個反轉質數，應回傳包含該數字的陣列', () => {
    expect(backwardsPrime(13, 13)).toEqual([13])
  })

  it('當 start > end 時應回傳空陣列（邊界情況）', () => {
    expect(backwardsPrime(100, 2)).toEqual([])
  })

  it('應該排除回文質數', () => {
    expect(backwardsPrime(11, 11)).toEqual([]) // 11 是質數但為回文，應排除
  })
})
