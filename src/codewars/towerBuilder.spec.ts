import { towerBuilder } from './towerBuilder'

describe('Build Tower', () => {
  it('應返回一個包含塔每一層的字串陣列', () => {
    expect(towerBuilder(1)).toEqual(['*'])
    expect(towerBuilder(2)).toEqual([' * ', '***'])
    expect(towerBuilder(3)).toEqual(['  *  ', ' *** ', '*****'])
  })
})
