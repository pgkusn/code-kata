import { numObj } from './numObj'

describe('Numbers to Objects', () => {
  it('應返回對應的物件陣列', () => {
    expect(numObj([118, 117, 120])).toEqual([{ 118: 'v' }, { 117: 'u' }, { 120: 'x' }])

    expect(numObj([101, 121, 110, 113, 113, 103])).toEqual([
      { 101: 'e' },
      { 121: 'y' },
      { 110: 'n' },
      { 113: 'q' },
      { 113: 'q' },
      { 103: 'g' },
    ])
  })
})
