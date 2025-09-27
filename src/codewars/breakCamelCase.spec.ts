import { breakCamelCase } from './breakCamelCase'

describe('Break camelCase', () => {
  it('應將駝峰式命名的字串拆分，在每個大寫字母之前插入一個空格', () => {
    expect(breakCamelCase('')).toBe('')
    expect(breakCamelCase('camelCasing')).toBe('camel Casing')
    expect(breakCamelCase('camelCasingTest')).toBe('camel Casing Test')
  })
})
