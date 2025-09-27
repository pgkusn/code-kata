import { well } from './well'

describe('Well of Ideas - Easy Version', () => {
  it('如果有一個或兩個好點子，則返回 "Publish!"', () => {
    expect(well(['bad', 'bad', 'bad'])).toBe('Fail!')
  })
  it('如果有超過兩個好點子，則返回 "I smell a series!"', () => {
    expect(well(['good', 'bad', 'bad', 'bad', 'bad'])).toBe('Publish!')
  })
  it('如果沒有好點子，則返回 "Fail!"', () => {
    expect(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])).toBe(
      'I smell a series!'
    )
  })
})
