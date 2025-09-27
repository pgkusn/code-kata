import { order } from './order'

describe('Your order, please', () => {
  it('應返回一個根據單詞中數字順序排序後的字串', () => {
    expect(order('is2 Thi1s T4est 3a')).toBe('Thi1s is2 3a T4est')
    expect(order('is2 This T4est 3a')).toBe('is2 This 3a T4est')
    expect(order('4of Fo1r pe6ople g3ood th5e the2')).toBe('Fo1r the2 g3ood 4of th5e pe6ople')
    expect(order('')).toBe('')
  })
})
