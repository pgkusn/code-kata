import { inArray } from './inArray'

describe('Which are in?', () => {
  function testing(a1: string[], a2: string[], expected: string[]) {
    expect(inArray(a1, a2)).toEqual(expected)
  }

  it('應按照字母順序返回正確的結果', () => {
    const a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong']

    let a1 = ['arp', 'live', 'strong']
    testing(a1, a2, ['arp', 'live', 'strong'])
    a1 = ['xyz', 'live', 'strong']
    testing(a1, a2, ['live', 'strong'])
    a1 = ['live', 'strong', 'arp']
    testing(a1, a2, ['arp', 'live', 'strong'])
    a1 = ['live', 'strong', 'lyal', 'lysh', 'arp']
    testing(a1, a2, ['arp', 'live', 'strong'])
    a1 = ['tarp', 'mice', 'bull']
    testing(a1, a2, [])
    a1 = []
    testing(a1, a2, [])
  })
})
