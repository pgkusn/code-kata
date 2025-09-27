import { rank } from './rank'

describe('Prize Draw', () => {
  it('範例測資：n=4', () => {
    const names = 'COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH'
    const weights = [1, 4, 4, 5, 2, 1]
    expect(rank(names, weights, 4)).toBe('PauL')
  })

  it('空字串輸入', () => {
    expect(rank('', [1, 2, 3], 1)).toBe('No participants')
  })

  it('n 大於參賽者數量', () => {
    const names = 'Alice,Bob'
    const weights = [2, 3]
    expect(rank(names, weights, 5)).toBe('Not enough participants')
  })

  it('兩人分數相同，比字母順序', () => {
    const names = 'BC,AD'
    const weights = [1, 1]
    expect(rank(names, weights, 1)).toBe('AD')
    expect(rank(names, weights, 2)).toBe('BC')
  })

  it('全部人依分數降冪排序', () => {
    const names = 'Zoe,Alice,Bob'
    const weights = [1, 1, 1]
    expect(rank(names, weights, 1)).toBe('Zoe')
  })
})
