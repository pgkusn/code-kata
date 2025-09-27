import { countPositivesSumNegatives } from './countPositivesSumNegatives'

describe('Count of positives / sum of negatives', () => {
  it('應回傳一個陣列，其中第一個元素是正數的數量，第二個元素是負數的總和', () => {
    expect(
      countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
    ).toEqual([10, -65])
    expect(
      countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])
    ).toEqual([8, -50])
  })
})
