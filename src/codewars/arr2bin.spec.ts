import { arr2bin } from './arr2bin'

describe('Arguments to Binary addition', () => {
  it('應該回傳數字元素相加的二進制表示', () => {
    expect(arr2bin([1, 2])).toEqual('11')
    expect(arr2bin([1, 2, 'a'])).toEqual('11')
    expect(arr2bin([])).toEqual('0')
    expect(arr2bin(['a', 'b', 'c'])).toEqual('0')
  })
  it('如陣列中有包含 NaN，應回傳 NaN', () => {
    expect(arr2bin([1, 2, '3', NaN])).toEqual('NaN')
  })
})
