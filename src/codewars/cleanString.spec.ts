import { cleanString } from './cleanString'

describe('Backspaces in string', function () {
  it('應正確處理刪除字串', () => {
    expect(cleanString('abc#d##c')).toBe('ac')
    expect(cleanString('abc####d##c#')).toBe('')
  })
})
