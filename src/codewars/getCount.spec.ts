import { getCount } from './getCount'

describe('getCount 函數的測試', function () {
  it('應該正確計算出字串中母音字母的數量', function () {
    expect(getCount('abracadabra')).toBe(5)
  })
})
