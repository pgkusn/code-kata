import { triangleType } from './triangleType'

describe('Triangle type', () => {
  it('should return 0 for invalid triangle (2, 4, 6)', () => {
    expect(triangleType(2, 4, 6)).toBe(0)
  })

  it('should return 1 for acute triangle (8, 5, 7)', () => {
    expect(triangleType(8, 5, 7)).toBe(1)
  })

  it('should return 2 for right triangle (3, 4, 5)', () => {
    expect(triangleType(3, 4, 5)).toBe(2)
  })

  it('should return 3 for obtuse triangle (7, 12, 8)', () => {
    expect(triangleType(7, 12, 8)).toBe(3)
  })

  it('should return 0 for degenerate triangle (1, 2, 3)', () => {
    expect(triangleType(1, 2, 3)).toBe(0)
  })

  it('should return 0 for zero side (0, 4, 5)', () => {
    expect(triangleType(0, 4, 5)).toBe(0)
  })

  it('should return 1 for floating point acute triangle (2.5, 2.5, 2.5)', () => {
    expect(triangleType(2.5, 2.5, 2.5)).toBe(1)
  })

  it('should return 2 for floating point right triangle (1.2, 1.6, 2)', () => {
    expect(triangleType(1.2, 1.6, 2)).toBe(2)
  })
})
