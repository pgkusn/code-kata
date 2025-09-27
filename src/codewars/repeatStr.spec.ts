import { repeatStr } from './repeatStr'

describe('String repeat', () => {
  it('應重複字串 n 次', () => {
    expect(repeatStr(3, '*')).toBe('***')
  })
})
