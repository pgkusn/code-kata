import { part } from './part'

describe('Alan Partridge I - Partridge Watch', () => {
  it('應返回相應的結果', () => {
    expect(part(['Grouse', 'Partridge', 'Pheasant'])).toBe("Mine's a Pint!")
    expect(part(['Pheasant', 'Goose', 'Starling', 'Robin'])).toBe(
      "Lynn, I've pierced my foot on a spike!!"
    )
    expect(
      part([
        'Grouse',
        'Partridge',
        'Pheasant',
        'Goose',
        'Starling',
        'Robin',
        'Thrush',
        'Emu',
        'PearTree',
        'Chat',
        'Dan',
        'Square',
        'Toblerone',
        'Lynn',
        'AlphaPapa',
        'BMW',
        'Graham',
        'Tool',
        'Nomad',
        'Finger',
        'Hamster',
      ])
    ).toBe("Mine's a Pint!!!!!!!!")
  })
})
