import { updateLight } from './updateLight'

describe('Thinkful - Logic Drills: Traffic light', () => {
  it('應正確更新交通信號燈', () => {
    expect(updateLight('green')).toBe('yellow')
    expect(updateLight('yellow')).toBe('red')
    expect(updateLight('red')).toBe('green')
  })
})
