import { streetFighterSelection } from './streetFighterSelection'

describe('Street Fighter 2 - Character Selection', () => {
  type Move = 'down' | 'up' | 'right' | 'left'
  const fighters: string[][] = [
    ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
    ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
  ]
  const opts: Move[] = ['up', 'down', 'right', 'left']
  let moves: Move[] = []

  describe('街頭霸王2 - 角色選擇', () => {
    it('應該能處理少量移動', () => {
      moves = ['up', 'left', 'right', 'left', 'left']
      expect(streetFighterSelection(fighters, [0, 0], moves)).toEqual([
        'Ryu',
        'Vega',
        'Ryu',
        'Vega',
        'Balrog',
      ])
    })

    it('應該能處理沒有選擇游標移動的情況', () => {
      moves = []
      expect(streetFighterSelection(fighters, [0, 0], moves)).toEqual([])
    })

    it('應該能處理一直向左移動的情況', () => {
      moves = ['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left']
      expect(streetFighterSelection(fighters, [0, 0], moves)).toEqual([
        'Vega',
        'Balrog',
        'Guile',
        'Blanka',
        'E.Honda',
        'Ryu',
        'Vega',
        'Balrog',
      ])
    })

    it('應該能處理一直向右移動的情況', () => {
      moves = ['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right']
      expect(streetFighterSelection(fighters, [0, 0], moves)).toEqual([
        'E.Honda',
        'Blanka',
        'Guile',
        'Balrog',
        'Vega',
        'Ryu',
        'E.Honda',
        'Blanka',
      ])
    })

    it('應該能使用所有4個方向順時針移動兩次', () => {
      moves = ['up', 'left', 'down', 'right', 'up', 'left', 'down', 'right']
      expect(streetFighterSelection(fighters, [0, 0], moves)).toEqual([
        'Ryu',
        'Vega',
        'M.Bison',
        'Ken',
        'Ryu',
        'Vega',
        'M.Bison',
        'Ken',
      ])
    })

    it('應該能處理一直向下移動的情況', () => {
      moves = ['down', 'down', 'down', 'down']
      expect(streetFighterSelection(fighters, [0, 0], moves)).toEqual([
        'Ken',
        'Ken',
        'Ken',
        'Ken',
      ])
    })

    it('應該能處理一直向上移動的情況', () => {
      moves = ['up', 'up', 'up', 'up']
      expect(streetFighterSelection(fighters, [0, 0], moves)).toEqual([
        'Ryu',
        'Ryu',
        'Ryu',
        'Ryu',
      ])
    })
  })
})
