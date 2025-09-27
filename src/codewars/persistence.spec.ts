import { persistence } from './persistence'

describe('Persistent Bugger', () => {
  it('應返回 39 的持續性為 3', () => {
    expect(persistence(39)).toBe(3)
  })

  it('應返回 4 的持續性為 0', () => {
    expect(persistence(4)).toBe(0)
  })

  it('應返回 25 的持續性為 2', () => {
    expect(persistence(25)).toBe(2)
  })

  it('應返回 999 的持續性為 4', () => {
    expect(persistence(999)).toBe(4)
  })
})
