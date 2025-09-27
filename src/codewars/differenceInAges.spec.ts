import { differenceInAges } from './differenceInAges'

describe('Find the Difference in Age between Oldest and Youngest Family Members', () => {
  it('應該返回正確的年齡差陣列', () => {
    expect(differenceInAges([82, 15, 6, 38, 35])).toEqual([6, 82, 76])
    expect(differenceInAges([57, 99, 14, 32])).toEqual([14, 99, 85])
    expect(differenceInAges([5, 10, 15, 20, 25])).toEqual([5, 25, 20])
  })
})
