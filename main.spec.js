import { describe, expect, it } from 'vitest'
import { flip, warnTheSheep, points, sumOfDifferences } from './main'

describe('Gravity Flip', () => {
  it('如第一個參數傳入 R 時，應回傳升冪排序的陣列', () => {
    expect(flip('R', [3, 2, 1, 2])).toEqual([1, 2, 2, 3])
  })
  it('如第一個參數傳入 L 時，應回傳降冪排序的陣列', () => {
    expect(flip('L', [1, 4, 5, 3, 5])).toEqual([5, 5, 4, 3, 1])
  })
})
describe("A wolf in sheep's clothing", () => {
  it('如傳入陣列中的 wolf 不在最後一個時，應回傳包含其所在陣列（反轉後）位置的指定字串', () => {
    const ary = ['sheep', 'sheep', 'sheep', 'wolf', 'sheep']
    expect(warnTheSheep(ary)).toBe('Oi! Sheep number 1! You are about to be eaten by a wolf!')
  })
  it('如傳入陣列中的 wolf 在最後一個時，應回傳指定字串', () => {
    const ary = ['sheep', 'sheep', 'wolf']
    expect(warnTheSheep(ary)).toBe('Pls go away and stop eating my sheep')
  })
})
describe('Total amount of points', () => {
  it('應依據傳入的比數回傳正確的加總分數', () => {
    const games1 = ['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']
    const games2 = ['1:1', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4']
    const games3 = ['0:1', '0:2', '0:3', '0:4', '1:2', '1:3', '1:4', '2:3', '2:4', '3:4']
    const games4 = ['1:0', '2:0', '3:0', '4:0', '2:1', '1:3', '1:4', '2:3', '2:4', '3:4']
    const games5 = ['1:0', '2:0', '3:0', '4:4', '2:2', '3:3', '1:4', '2:3', '2:4', '3:4']
    expect(points(games1)).toBe(30)
    expect(points(games2)).toBe(10)
    expect(points(games3)).toBe(0)
    expect(points(games4)).toBe(15)
    expect(points(games5)).toBe(12)
  })
})
describe('Sum of differences in array', () => {
  it('應依據傳入的陣列回傳正確的加總值', () => {
    expect(sumOfDifferences([1, 2, 10])).toBe(9)
    expect(sumOfDifferences([-3, -2, -1])).toBe(2)
    expect(sumOfDifferences([-17, 17])).toBe(34)
    expect(sumOfDifferences([6, -16, -6, 6, 3, -8, -13])).toBe(22)
    expect(sumOfDifferences([0, 6, -6, -3, 0, -7, -5, 4, 2, 2, 6, 1, 1, 5, 3, -3, 4, -2])).toBe(13)
  })
  it('如為空陣列或長度為 1 時，應回傳 0', () => {
    expect(sumOfDifferences([])).toBe(0)
    expect(sumOfDifferences([-1])).toBe(0)
  })
})
