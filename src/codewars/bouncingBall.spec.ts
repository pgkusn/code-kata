import { bouncingBall } from './bouncingBall'

describe('Bouncing Balls', () => {
  it('應返回球從窗前經過的次數', () => {
    expect(bouncingBall(3.0, 0.66, 1.5)).toBe(3)
    expect(bouncingBall(30.0, 0.66, 1.5)).toBe(15)
    expect(bouncingBall(30, 0.75, 1.5)).toBe(21)
    expect(bouncingBall(30, 0.4, 10)).toBe(3)
  })
})
