import { baublesOnTree } from './baublesOnTree'

describe('Christmas baubles on the tree', () => {
  it('應返回每個樹枝上的綵球陣列', () => {
    expect(baublesOnTree(10, 2)).toEqual([5, 5])
    expect(baublesOnTree(5, 7)).toEqual([1, 1, 1, 1, 1, 0, 0])
    expect(baublesOnTree(12, 5)).toEqual([3, 3, 2, 2, 2])
    expect(baublesOnTree(0, 10)).toStrictEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    expect(baublesOnTree(5, 0)).toBe('Grandma, we will have to buy a Christmas tree first!')
  })
})
