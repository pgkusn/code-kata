import { comp } from './comp'

describe('Are they the "same"?', () => {
  it('應判斷 a2 陣列中的元素是否為 a1 陣列中每個元素的平方', () => {
    const a1 = [121, 144, 19, 161, 19, 144, 19, 11]
    const a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]
    expect(comp(a1, a2)).toBe(true)

    const a1Alt = [121, 144, 19, 161, 19, 144, 19, 11]
    const a2Alt = [11 * 21, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]
    expect(comp(a1Alt, a2Alt)).toBe(false)
  })
})
