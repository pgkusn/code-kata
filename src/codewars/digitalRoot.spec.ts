import { digitalRoot } from './digitalRoot'

describe('Sum of Digits / Digital Root', () => {
  it('將一個數字的每位數字相加，並將總和的個位數當作結果返回', () => {
    expect(digitalRoot(16)).toBe(7) // --> 1 + 6 = 7
    expect(digitalRoot(456)).toBe(6) // -->  4 + 5 + 6 = 15  -->  1 + 5 = 6
  })
})
