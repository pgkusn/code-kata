import { findRoutes } from './findRoutes'

describe('Follow that Spy', () => {
  it('應該能正確拼接範例行程', () => {
    const routes = [
      ['USA', 'BRA'],
      ['JPN', 'PHL'],
      ['BRA', 'UAE'],
      ['UAE', 'JPN'],
    ]
    const result = findRoutes(routes)
    expect(result).toBe('USA, BRA, UAE, JPN, PHL')
  })

  it('應該能處理只有一段航程的情況', () => {
    const routes = [['A', 'B']]
    const result = findRoutes(routes)
    expect(result).toBe('A, B')
  })

  it('應該能處理兩段簡單串接的情況', () => {
    const routes = [
      ['ICN', 'SFO'],
      ['SFO', 'LAX'],
    ]
    const result = findRoutes(routes)
    expect(result).toBe('ICN, SFO, LAX')
  })

  it('應該能正確處理輸入順序打亂的情況', () => {
    const routes = [
      ['C', 'D'],
      ['A', 'B'],
      ['B', 'C'],
    ]
    const result = findRoutes(routes)
    expect(result).toBe('A, B, C, D')
  })

  it('應該能處理多國際航點範例', () => {
    const routes = [
      ['FRA', 'DXB'],
      ['DXB', 'SIN'],
      ['SIN', 'SYD'],
      ['NYC', 'FRA'],
    ]
    const result = findRoutes(routes)
    expect(result).toBe('NYC, FRA, DXB, SIN, SYD')
  })
})
