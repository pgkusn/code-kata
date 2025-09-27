import { elevator } from './elevator'

describe('Closest elevator', function () {
  it("If the left elevator is closer to the call, should return 'left'", function () {
    expect(elevator(0, 1, 0)).toBe('left')
  })
  it("If the right elevator is closer to the call, should return 'right'", function () {
    expect(elevator(0, 1, 1)).toBe('right')
  })
  it("If the right elevator is closer to the call, should return 'right'", function () {
    expect(elevator(0, 1, 2)).toBe('right')
  })
  it("If both elevators are on the same floor, should return 'right'", function () {
    expect(elevator(0, 0, 0)).toBe('right')
  })
  it("If both elevators are in equal distance from the call, should return 'right'", function () {
    expect(elevator(0, 2, 1)).toBe('right')
  })
})
