import { fire } from './fire'

describe('Grid blast!', () => {
  it('應返回正確的戰場區域', () => {
    expect(fire(0, 0)).toBe('top left')
    expect(fire(1, 2)).toBe('bottom middle')
  })
})
