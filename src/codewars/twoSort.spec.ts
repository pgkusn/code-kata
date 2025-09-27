import { twoSort } from './twoSort'

describe('Sort and Star', () => {
  it('應回傳排序後的字串，並用 *** 分隔', () => {
    expect(
      twoSort(['bitcoin', 'take', 'over', 'the', 'world', 'maybe', 'who', 'knows', 'perhaps'])
    ).toBe('b***i***t***c***o***i***n')
    expect(
      twoSort([
        'turns',
        'out',
        'random',
        'test',
        'cases',
        'are',
        'easier',
        'than',
        'writing',
        'out',
        'basic',
        'ones',
      ])
    ).toBe('a***r***e')
  })
})
