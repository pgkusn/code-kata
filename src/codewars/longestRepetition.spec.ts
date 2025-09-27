import { longestRepetition } from './longestRepetition'

describe('Character with longest consecutive repetition', () => {
  it('應該處理空字串', () => {
    expect(longestRepetition('')).toEqual(['', 0])
  })

  it('應該找出連續重複次數最多的字元', () => {
    expect(longestRepetition('aaaabb')).toEqual(['a', 4])
    expect(longestRepetition('bbbaaabaaaa')).toEqual(['a', 4])
    expect(longestRepetition('cbdeuuu900')).toEqual(['u', 3])
  })

  it('當有多個字元具有相同重複次數時，應返回首次出現的字元', () => {
    expect(longestRepetition('aabb')).toEqual(['a', 2])
    expect(longestRepetition('abbbccc')).toEqual(['b', 3])
  })

  it('應該區分大小寫', () => {
    expect(longestRepetition('AAaaBBbb')).toEqual(['A', 2])
    expect(longestRepetition('aAaaBBbb')).toEqual(['a', 2])
  })
})
