import { addLength } from './addLength'

describe('Add Length', () => {
  it('應將每個單詞的長度添加到該單詞的末尾，並返回陣列', () => {
    expect(addLength('apple ban')).toEqual(['apple 5', 'ban 3'])
    expect(addLength('you will win')).toEqual(['you 3', 'will 4', 'win 3'])
    expect(addLength('test')).toEqual(['test 4']) // 單詞只有一個
    expect(addLength('hello world of code')).toEqual(['hello 5', 'world 5', 'of 2', 'code 4']) // 多個單詞
  })
})
