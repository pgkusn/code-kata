import { stringTransformer } from './stringTransformer'

describe('String transformer', () => {
  it('應該轉換大小寫並反轉單字順序', () => {
    expect(stringTransformer('Example Input')).toBe('iNPUT eXAMPLE')
    expect(stringTransformer('hello WORLD')).toBe('world HELLO')
  })

  it('應該正確處理多個連續空格', () => {
    expect(stringTransformer('You  are    awesome')).toBe('AWESOME    ARE  yOU')
    expect(stringTransformer('Good   Morning')).toBe('mORNING   gOOD')
  })

  it('應該正確處理前後空格', () => {
    expect(stringTransformer('  Hello World  ')).toBe('  wORLD hELLO  ')
    expect(stringTransformer(' JavaScript ')).toBe(' jAVAsCRIPT ')
  })

  it('應該處理只有一個單字的情況', () => {
    expect(stringTransformer('Hello')).toBe('hELLO')
    expect(stringTransformer('WORLD')).toBe('world')
  })
})
