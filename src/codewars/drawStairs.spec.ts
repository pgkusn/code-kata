import { drawStairs } from './drawStairs'

describe('Draw stairs', function () {
  it('Draw stairs with only 1 step', () => {
    expect(drawStairs(1)).toBe('I')
  })
  it('Draw stairs with 3 steps', () => {
    expect(drawStairs(3)).toBe('I\n I\n  I')
  })
  it('Draw stairs with 5 steps', () => {
    expect(drawStairs(5)).toBe('I\n I\n  I\n   I\n    I')
  })
})
