import { gooseFilter } from './gooseFilter'

describe('Filter out the geese', () => {
  it('Mixed list', () => {
    expect(
      gooseFilter([
        'Mallard',
        'Hook Bill',
        'African',
        'Crested',
        'Pilgrim',
        'Toulouse',
        'Blue Swedish',
      ])
    ).toEqual(['Mallard', 'Hook Bill', 'Crested', 'Blue Swedish'])
  })
  it('No geese', () => {
    expect(gooseFilter(['Mallard', 'Barbary', 'Hook Bill', 'Blue Swedish', 'Crested'])).toEqual([
      'Mallard',
      'Barbary',
      'Hook Bill',
      'Blue Swedish',
      'Crested',
    ])
  })
  it('All geese', () => {
    expect(
      gooseFilter(['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'])
    ).toEqual([])
  })
})
