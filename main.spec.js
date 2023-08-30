import { describe, expect, it } from 'vitest'
import {
  flip,
  warnTheSheep,
  points,
  sumOfDifferences,
  multipleOfIndex,
  toCsvText,
  arrayPlusArray,
  firstNonConsecutive,
  findMultiples,
  invert,
  mergeArrays,
  duckDuckGoose,
  maps,
  grow,
  squareOrSquareRoot,
  howMuchILoveYou,
} from './main'

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
  it('應回傳正確的加總分數', () => {
    expect(points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])).toBe(30)
    expect(points(['1:1', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4'])).toBe(10)
    expect(points(['0:1', '0:2', '0:3', '0:4', '1:2', '1:3', '1:4', '2:3', '2:4', '3:4'])).toBe(0)
    expect(points(['1:0', '2:0', '3:0', '4:0', '2:1', '1:3', '1:4', '2:3', '2:4', '3:4'])).toBe(15)
    expect(points(['1:0', '2:0', '3:0', '4:4', '2:2', '3:3', '1:4', '2:3', '2:4', '3:4'])).toBe(12)
  })
})
describe('Sum of differences in array', () => {
  it('應回傳正確的計算結果', () => {
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
describe('Multiple of index', () => {
  it('應回傳篩選過後的數字陣列', () => {
    expect(multipleOfIndex([22, -6, 32, 82, 9, 25])).toEqual([-6, 32, 25])
    expect(multipleOfIndex([68, -1, 1, -7, 10, 10])).toEqual([-1, 10])
    expect(multipleOfIndex([0, 2, 3, 6, 9])).toEqual([0, 2, 6])
  })
})
describe('CSV representation of array', () => {
  it('應將原二維數字陣列轉換成 CSV 格式的字串', () => {
    const input = [
      [0, 1, 2, 3, 4],
      [10, 11, 12, 13, 14],
      [20, 21, 22, 23, 24],
      [30, 31, 32, 33, 34],
    ]
    const output = '0,1,2,3,4\n' + '10,11,12,13,14\n' + '20,21,22,23,24\n' + '30,31,32,33,34'
    expect(toCsvText(input)).toEqual(output)
  })
})
describe('Array plus array', () => {
  it('應回傳兩個數字陣列的加總', () => {
    expect(arrayPlusArray([1, 2, 3], [4, 5, 6])).toBe(21)
    expect(arrayPlusArray([-1, -2, -3], [-4, -5, -6])).toBe(-21)
    expect(arrayPlusArray([0, 0, 0], [4, 5, 6])).toBe(15)
    expect(arrayPlusArray([100, 200, 300], [400, 500, 600])).toBe(2100)
  })
})
describe('Find the first non-consecutive number', () => {
  it('應回傳陣列中第一個不連續的數字', () => {
    expect(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])).toBe(6)
  })
  it('如果整個陣列都是連續的，應返回 null', () => {
    expect(firstNonConsecutive([1, 2, 3, 4])).toBe(null)
  })
  it('如果是空陣列，應返回 null', () => {
    expect(firstNonConsecutive([])).toBe(null)
  })
  it('如果陣列中只有一個元素，應返回 null', () => {
    expect(firstNonConsecutive([1])).toBe(null)
  })
})
describe('Find Multiples of a Number', () => {
  it('應回傳正確的倍數數字陣列', () => {
    expect(findMultiples(5, 25)).toEqual([5, 10, 15, 20, 25])
    expect(findMultiples(1, 2)).toEqual([1, 2])
    expect(findMultiples(5, 7)).toEqual([5])
  })
})
describe('Invert values', () => {
  it('應將陣列中的正數轉負數，負數轉正數', () => {
    expect(invert([1, 2, 3, 4, 5])).toEqual([-1, -2, -3, -4, -5])
    expect(invert([1, -2, 3, -4, 5])).toEqual([-1, 2, -3, 4, -5])
  })
  it('如為空陣列則回傳空陣列', () => {
    expect(invert([])).toEqual([])
  })
  it('如元素為零則回傳零', () => {
    expect(invert([0])).toEqual([0])
  })
})
describe('Merge two sorted arrays into one', () => {
  it('應回傳一個合併後按照升序排序的陣列', () => {
    expect(mergeArrays([1, 2, 3, 4], [5, 6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })
  it('應回傳一個合併後不含重複元素的陣列', () => {
    expect(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])).toEqual([
      1, 2, 3, 4, 5, 7, 9, 10, 11, 12,
    ])
  })
})
describe('Duck Duck Goose', () => {
  it('應回傳指定陣列索引中的物件 name 屬性', () => {
    class Player {
      constructor(name) {
        this.name = name
      }
    }
    let ex_names = ['a', 'b', 'c', 'd', 'c', 'e', 'f', 'g', 'h', 'z']
    let players = ex_names.map(n => new Player(n))
    expect(duckDuckGoose(players, 1)).toBe('a')
    expect(duckDuckGoose(players, 3)).toBe('c')
    expect(duckDuckGoose(players, 10)).toBe('z')
    expect(duckDuckGoose(players, 30)).toBe('z')
  })
})
describe('Beginner - Lost Without a Map', () => {
  it('應回傳乘上兩倍後的數字陣列', () => {
    expect(maps([1, 2, 3])).toEqual([2, 4, 6])
    expect(maps([4, 1, 1, 1, 4])).toEqual([8, 2, 2, 2, 8])
  })
})
describe('Beginner - Reduce but Grow', () => {
  it('應回傳按順序將值相乘的結果', () => {
    expect(grow([1, 2, 3])).toBe(6)
    expect(grow([4, 1, 1, 1, 4])).toBe(16)
    expect(grow([2, 2, 2, 2, 2, 2])).toBe(64)
  })
})
describe('To square(root) or not to square(root)', () => {
  it('應回傳平方或平方根的數字陣列', () => {
    expect(squareOrSquareRoot([4, 3, 9, 7, 2, 1])).toEqual([2, 9, 3, 49, 4, 1])
    expect(squareOrSquareRoot([100, 101, 5, 5, 1, 1])).toEqual([10, 10201, 25, 25, 1, 1])
  })
})
describe('I love you, a little , a lot, passionately ... not at all', () => {
  it('應回傳指定的陣列元素', () => {
    expect(howMuchILoveYou(7)).toBe('I love you')
    expect(howMuchILoveYou(3)).toBe('a lot')
    expect(howMuchILoveYou(6)).toBe('not at all')
  })
})
