import { sortTheInnerContent } from './sortTheInnerContent'

describe('Srot the inner ctonnet in dsnnieedcg oredr', () => {
  it('應正確排序句子的每個單字中間字母 (範例 1)', () => {
    const input = 'sort the inner content in descending order'
    const output = 'srot the inner ctonnet in dsnnieedcg oredr'
    expect(sortTheInnerContent(input)).toBe(output)
  })

  it('應正確處理短句 (範例 2)', () => {
    const input = 'wait for me'
    const output = 'wiat for me'
    expect(sortTheInnerContent(input)).toBe(output)
  })

  it('應正確處理三個單字 (範例 3)', () => {
    const input = 'this kata is easy'
    const output = 'tihs ktaa is esay'
    expect(sortTheInnerContent(input)).toBe(output)
  })

  it('應保持長度小於等於 2 的單字不變', () => {
    const input = 'a an in is it at'
    const output = 'a an in is it at'
    expect(sortTheInnerContent(input)).toBe(output)
  })

  it('應正確處理只有一個單字的情況', () => {
    const input = 'amazing'
    const output = 'aznmiag'
    expect(sortTheInnerContent(input)).toBe(output)
  })

  it('應正確處理所有單字都是三個字母的句子', () => {
    const input = 'dog cat rat'
    const output = 'dog cat rat'
    expect(sortTheInnerContent(input)).toBe(output)
  })
})
