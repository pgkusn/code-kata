import { stringToArray } from './stringToArray'

describe('Convert a string to an array', () => {
  it('應回傳分割後的字串並將其轉换為單詞陣列', () => {
    expect(stringToArray('Robin Singh')).toEqual(['Robin', 'Singh'])
    expect(stringToArray('I love arrays they are my favorite')).toEqual([
      'I',
      'love',
      'arrays',
      'they',
      'are',
      'my',
      'favorite',
    ])
  })
})
