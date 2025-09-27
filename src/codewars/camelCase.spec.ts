import { camelCase } from './camelCase'

describe('amelCase Method', () => {
  it('應將字串轉換為駝峰命名法', () => {
    expect(camelCase('')).toBe('')
    expect(camelCase('test case')).toBe('TestCase')
    expect(camelCase('camel case method')).toBe('CamelCaseMethod')
    expect(camelCase('say hello')).toBe('SayHello')
    expect(camelCase('camel case word')).toBe('CamelCaseWord')
  })
})
