import { printerError } from './printerError'

describe('Printer Errors', () => {
  it('應返回一個字串，格式為"錯誤個數/總字母數"', () => {
    expect(printerError('aaabbbbhaijjjm')).toBe('0/14')
    expect(printerError('aaaxbbbbyyhwawiwjjjwwm')).toBe('8/22')
  })
})
