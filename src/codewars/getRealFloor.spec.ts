import { getRealFloor } from './getRealFloor'

describe("What's the real floor?", function () {
  it('應該返回實際樓層數', () => {
    expect(getRealFloor(-1)).toBe(-1)
    expect(getRealFloor(1)).toBe(0)
    expect(getRealFloor(5)).toBe(4)
    expect(getRealFloor(15)).toBe(13)
  })
})
