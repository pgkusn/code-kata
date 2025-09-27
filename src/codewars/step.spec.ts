import { step } from './step'

describe('step', () => {
  it('should return [5, 7] for step(2, 5, 7)', () => {
    expect(step(2, 5, 7)).toEqual([5, 7])
  })

  it('should return null for step(2, 5, 5)', () => {
    expect(step(2, 5, 5)).toBeNull()
  })

  it('should return [163, 167] for step(4, 130, 200)', () => {
    expect(step(4, 130, 200)).toEqual([163, 167])
  })

  it('should return [101, 107] for step(6, 100, 110)', () => {
    expect(step(6, 100, 110)).toEqual([101, 107])
  })

  it('should return null for step(2, 4900, 4919)', () => {
    expect(step(2, 4900, 4919)).toBeNull()
  })
})
