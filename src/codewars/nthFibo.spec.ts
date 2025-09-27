import { nthFibo } from './nthFibo'

describe('nthFibo', () => {
  it('should return 0 for n = 1', () => {
    expect(nthFibo(1)).toBe(0)
  })

  it('should return 1 for n = 2', () => {
    expect(nthFibo(2)).toBe(1)
  })

  it('should return 1 for n = 3', () => {
    expect(nthFibo(3)).toBe(1)
  })

  it('should return 2 for n = 4', () => {
    expect(nthFibo(4)).toBe(2)
  })

  it('should return 3 for n = 5', () => {
    expect(nthFibo(5)).toBe(3)
  })

  it('should return 5 for n = 6', () => {
    expect(nthFibo(6)).toBe(5)
  })

  it('should return 13 for n = 8', () => {
    expect(nthFibo(8)).toBe(13)
  })

  it('should return 21 for n = 9', () => {
    expect(nthFibo(9)).toBe(21)
  })

  it('should return 144 for n = 13', () => {
    expect(nthFibo(13)).toBe(144)
  })

  it('should return 6765 for n = 21', () => {
    expect(nthFibo(21)).toBe(6765)
  })
})
