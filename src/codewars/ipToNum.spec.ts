import { ipToNum, numToIp } from './ipToNum'

describe('IP Address to Number', () => {
  describe('ipToNum', () => {
    it('應該將 192.168.1.1 轉換為 3232235777', () => {
      expect(ipToNum('192.168.1.1')).toBe(3232235777)
    })

    it('應該將 10.0.0.0 轉換為 167772160', () => {
      expect(ipToNum('10.0.0.0')).toBe(167772160)
    })

    it('應該將 176.16.0.1 轉換為 2953838593', () => {
      expect(ipToNum('176.16.0.1')).toBe(2953838593)
    })
  })

  describe('numToIp', () => {
    it('應該將 3232235777 轉換為 192.168.1.1', () => {
      expect(numToIp(3232235777)).toBe('192.168.1.1')
    })

    it('應該將 167772160 轉換為 10.0.0.0', () => {
      expect(numToIp(167772160)).toBe('10.0.0.0')
    })

    it('應該將 2953838593 轉換為 176.16.0.1', () => {
      expect(numToIp(2953838593)).toBe('176.16.0.1')
    })
  })
})
