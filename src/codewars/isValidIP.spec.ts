import { isValidIP } from './isValidIP'

describe('IP Validation', () => {
  it('應該能驗證有效的 IPv4 地址', () => {
    expect(isValidIP('1.2.3.4')).toBe(true)
    expect(isValidIP('123.45.67.89')).toBe(true)
    expect(isValidIP('192.168.1.1')).toBe(true)
    expect(isValidIP('0.0.0.0')).toBe(true)
    expect(isValidIP('255.255.255.255')).toBe(true)
  })

  it('應該拒絕無效的 IP 地址格式', () => {
    expect(isValidIP('1.2.3')).toBe(false) // 少一個區段
    expect(isValidIP('1.2.3.4.5')).toBe(false) // 多一個區段
    expect(isValidIP('123.456.78.90')).toBe(false) // 數字超過 255
    expect(isValidIP('123.045.067.089')).toBe(false) // 不可有前導零
  })

  it('應該拒絕包含非數字字符的輸入', () => {
    expect(isValidIP('1.2.3.4\n')).toBe(false) // 含有換行符
    expect(isValidIP('1.2.3.4\t')).toBe(false) // 含有 tab
    expect(isValidIP('1.2.3.a')).toBe(false) // 含有字母
    expect(isValidIP('1.2.3.-4')).toBe(false) // 含有負號
    expect(isValidIP('1.2.3. 4')).toBe(false) // 含有空格
  })

  it('應該拒絕空字串和特殊格式', () => {
    expect(isValidIP('')).toBe(false) // 空字串
    expect(isValidIP('abc.def.ghi.jkl')).toBe(false) // 全是字母
    expect(isValidIP('12.34.56')).toBe(false) // 不完整
    expect(isValidIP(' 1.2.3.4')).toBe(false) // 開頭有空格
    expect(isValidIP('1.2.3.4 ')).toBe(false) // 結尾有空格
  })
})
