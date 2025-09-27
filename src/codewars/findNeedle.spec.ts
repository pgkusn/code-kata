import { findNeedle } from './findNeedle'

describe('A Needle in the Haystack', () => {
  it('應找到針並返回正確的消息', () => {
    expect(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])).toBe(
      'found the needle at position 5'
    )
    expect(findNeedle(['one', 'two', 'three', 'needle'])).toBe('found the needle at position 3')
    expect(findNeedle(['no', 'needle', 'here'])).toBe('found the needle at position 1')
    expect(findNeedle(['not', 'in', 'this', 'array'])).toBe('needle not found')
  })
})
