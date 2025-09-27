import { toCamelCase } from './toCamelCase'

describe('Convert string to camel case', () => {
  it('應返回空字串', () => {
    expect(toCamelCase('')).toBe('')
  })

  it("應將 'the_stealth_warrior' 轉換為 'theStealthWarrior'", () => {
    expect(toCamelCase('the_stealth_warrior')).toBe('theStealthWarrior')
  })

  it("應將 'The-Stealth-Warrior' 轉換為 'TheStealthWarrior'", () => {
    expect(toCamelCase('The-Stealth-Warrior')).toBe('TheStealthWarrior')
  })

  it("應將 'A-B-C' 轉換為 'ABC'", () => {
    expect(toCamelCase('A-B-C')).toBe('ABC')
  })
})
