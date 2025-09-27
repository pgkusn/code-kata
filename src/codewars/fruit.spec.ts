import { fruit } from './fruit'

describe('Fruit Machine', () => {
  let reel, reel1, reel2, reel3, spin

  it('應該正確計算獎勵', () => {
    reel = ['Wild', 'Star', 'Bell', 'Shell', 'Seven', 'Cherry', 'Bar', 'King', 'Queen', 'Jack']
    spin = [0, 0, 0]
    expect(fruit([reel, reel, reel], spin)).toBe(100)

    reel1 = ['Wild', 'Star', 'Bell', 'Shell', 'Seven', 'Cherry', 'Bar', 'King', 'Queen', 'Jack']
    reel2 = ['Bar', 'Wild', 'Queen', 'Bell', 'King', 'Seven', 'Cherry', 'Jack', 'Star', 'Shell']
    reel3 = ['Bell', 'King', 'Wild', 'Bar', 'Seven', 'Jack', 'Shell', 'Cherry', 'Queen', 'Star']
    spin = [5, 4, 3]
    expect(fruit([reel1, reel2, reel3], spin)).toBe(0)

    reel1 = ['King', 'Cherry', 'Bar', 'Jack', 'Seven', 'Queen', 'Star', 'Shell', 'Bell', 'Wild']
    reel2 = ['Bell', 'Seven', 'Jack', 'Queen', 'Bar', 'Star', 'Shell', 'Wild', 'Cherry', 'King']
    reel3 = ['Wild', 'King', 'Queen', 'Seven', 'Star', 'Bar', 'Shell', 'Cherry', 'Jack', 'Bell']
    spin = [0, 0, 1]
    expect(fruit([reel1, reel2, reel3], spin)).toBe(3)

    reel1 = ['King', 'Jack', 'Wild', 'Bell', 'Star', 'Seven', 'Queen', 'Cherry', 'Shell', 'Bar']
    reel2 = ['Star', 'Bar', 'Jack', 'Seven', 'Queen', 'Wild', 'King', 'Bell', 'Cherry', 'Shell']
    reel3 = ['King', 'Bell', 'Jack', 'Shell', 'Star', 'Cherry', 'Queen', 'Bar', 'Wild', 'Seven']
    spin = [0, 5, 0]
    expect(fruit([reel1, reel2, reel3], spin)).toBe(6)
  })
})
