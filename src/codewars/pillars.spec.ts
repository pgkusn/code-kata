import { pillars } from './pillars'

describe('Pillars', function () {
  it('Testing for number of pillars: 1, distance: 10 m and width: 10 cm', function () {
    expect(pillars(1, 10, 10)).toBe(0)
  })
  it('Testing for number of pillars: 2, distance: 20 m and width: 25 cm', function () {
    expect(pillars(2, 20, 25)).toBe(2000)
  })
  it('Testing for number of pillars: 11, distance: 15 m and width: 30 cm', function () {
    expect(pillars(11, 15, 30)).toBe(15270)
  })
})
