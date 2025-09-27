import { pyramid } from './pyramid'

describe('Pyramid Array', () => {
  it('Testing for 0', () => expect(pyramid(0)).toEqual([]))
  it('Testing for 1', () => expect(pyramid(1)).toEqual([[1]]))
  it('Testing for 2', () => expect(pyramid(2)).toEqual([[1], [1, 1]]))
  it('Testing for 3', () => expect(pyramid(3)).toEqual([[1], [1, 1], [1, 1, 1]]))
})
