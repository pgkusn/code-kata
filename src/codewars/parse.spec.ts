import { parse } from './parse'

describe('Make the Deadfish Swim', () => {
  it('應返回正確的解析結果', () => {
    expect(parse('iiisdoso')).toEqual([8, 64])
    expect(parse('iiisxxxdoso')).toEqual([8, 64])
  })
})
