import { travel } from './travel'

describe('travel', () => {
  const r =
    '123 Main Street St. Louisville OH 43071,' +
    '432 Main Long Road St. Louisville OH 43071,' +
    '786 High Street Pollocksville NY 56432,' +
    '54 Holy Grail Street Niagara Town ZP 32908,' +
    '3200 Main Rd. Bern AE 56210'

  it('should return correct result for OH 43071', () => {
    expect(travel(r, 'OH 43071')).toBe(
      'OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432'
    )
  })

  it('should return correct result for NY 56432', () => {
    expect(travel(r, 'NY 56432')).toBe('NY 56432:High Street Pollocksville/786')
  })

  it('should return correct result for ZP 32908', () => {
    expect(travel(r, 'ZP 32908')).toBe('ZP 32908:Holy Grail Street Niagara Town/54')
  })

  it('should return correct result for non-existing zipcode', () => {
    expect(travel(r, 'AA 00000')).toBe('AA 00000:/')
  })

  it('should return correct result for AE 56210', () => {
    expect(travel(r, 'AE 56210')).toBe('AE 56210:Main Rd. Bern/3200')
  })
})
