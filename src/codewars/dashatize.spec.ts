import { dashatize } from './dashatize'

describe('Dashatize it', () => {
  it('應該正確處理正整數', () => {
    expect(dashatize(274)).toBe('2-7-4')
    expect(dashatize(5311)).toBe('5-3-1-1')
    expect(dashatize(86320)).toBe('86-3-20')
    expect(dashatize(974302)).toBe('9-7-4-3-02')
  })

  it('應該正確處理零和負數', () => {
    expect(dashatize(0)).toBe('0')
    expect(dashatize(-1)).toBe('1')
    expect(dashatize(-28369)).toBe('28-3-6-9')
  })
})
