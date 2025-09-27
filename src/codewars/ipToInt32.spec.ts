import { ipToInt32 } from './ipToInt32'

describe('IPv4 to int32', () => {
  it('should convert 128.32.10.1 to 2149583361', () => {
    expect(ipToInt32('128.32.10.1')).toBe(2149583361)
  })

  it('should convert 0.0.0.0 to 0', () => {
    expect(ipToInt32('0.0.0.0')).toBe(0)
  })

  it('should convert 255.255.255.255 to 4294967295', () => {
    expect(ipToInt32('255.255.255.255')).toBe(4294967295)
  })

  it('should convert 192.168.1.1 to 3232235777', () => {
    expect(ipToInt32('192.168.1.1')).toBe(3232235777)
  })

  it('should convert 10.0.0.1 to 167772161', () => {
    expect(ipToInt32('10.0.0.1')).toBe(167772161)
  })
})
