import { quarterOf } from './quarterOf'

describe('Quarter of the year', () => {
  it('應返回正確的值', () => {
    expect(quarterOf(3)).toBe(1)
    expect(quarterOf(8)).toBe(3)
    expect(quarterOf(11)).toBe(4)
  })
})
