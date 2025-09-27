import { isHollow } from './isHollow'

describe('Hollow array', function () {
  it('應判斷陣列是否符合 hollow 的定義', () => {
    expect(isHollow([1, 2, 0, 0, 0, 3, 4])).toBe(true) // 左右各 2 個非零數字
    expect(isHollow([1, 0, 0, 0, 0])).toBe(false) // 不平衡的結構
    expect(isHollow([0, 0, 0, 1, 2])).toBe(false) // 零在開頭是不允許的
    expect(isHollow([1, 2, 0, 0, 4, 0])).toBe(false) // 零不連續
    expect(isHollow([1, 0, 0, 4])).toBe(false) // 只有 2 個零不夠
  })
})
