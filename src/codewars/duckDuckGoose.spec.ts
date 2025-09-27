import { duckDuckGoose } from './duckDuckGoose'

describe('Duck Duck Goose', () => {
  it('應回傳指定陣列索引中的物件 name 屬性', () => {
    class Player {
      name: string
      constructor(name: string) {
        this.name = name
      }
    }
    let ex_names = ['a', 'b', 'c', 'd', 'c', 'e', 'f', 'g', 'h', 'z']
    let players = ex_names.map(n => new Player(n))
    expect(duckDuckGoose(players, 1)).toBe('a')
    expect(duckDuckGoose(players, 3)).toBe('c')
    expect(duckDuckGoose(players, 10)).toBe('z')
    expect(duckDuckGoose(players, 30)).toBe('z')
  })
})
