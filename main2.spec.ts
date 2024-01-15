import { describe, it, expect } from 'vitest'
import * as fn from './main2'

describe("What's the real floor?", function () {
  it('應該返回實際樓層數', function () {
    expect(fn.getRealFloor(1)).toBe(0)
    expect(fn.getRealFloor(5)).toBe(4)
    expect(fn.getRealFloor(15)).toBe(13)
  })
})
describe('Remove First and Last Character', () => {
  it('應該移除字串的首尾字元', () => {
    expect(fn.removeChar('eloquent')).toBe('loquen')
    expect(fn.removeChar('country')).toBe('ountr')
    expect(fn.removeChar('person')).toBe('erso')
    expect(fn.removeChar('place')).toBe('lac')
  })
})
describe('Abbreviate a Two Word Name', () => {
  it('應該返回正確的縮寫', () => {
    expect(fn.abbrevName('Sam Harris')).toBe('S.H')
    expect(fn.abbrevName('Patrick Feenan')).toBe('P.F')
    expect(fn.abbrevName('R Favuzzi')).toBe('R.F')
  })
})
describe('Small enough? - Beginner', () => {
  it('應該返回布爾值，指示給定數組中的所有元素是否都小於或等於給定的限制值', () => {
    expect(fn.smallEnough([66, 101], 200)).toBe(true)
    expect(fn.smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)).toBe(false)
    expect(fn.smallEnough([101, 45, 75, 105, 99, 107], 107)).toBe(true)
    expect(fn.smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)).toBe(true)
    expect(fn.smallEnough([1, 1, 1, 1, 1, 2], 1)).toBe(false)
    expect(fn.smallEnough([78, 33, 22, 44, 88, 9, 6], 87)).toBe(false)
    expect(fn.smallEnough([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)).toBe(true)
    expect(fn.smallEnough([12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12], 12)).toBe(true)
  })
})
describe('Is it a palindrome?', () => {
  it('如果字串是回文則返回 true，否則返回 false', () => {
    expect(fn.isPalindrome('a')).toBe(true)
    expect(fn.isPalindrome('aba')).toBe(true)
    expect(fn.isPalindrome('Abba')).toBe(true)
    expect(fn.isPalindrome('hello')).toBe(false)
    expect(fn.isPalindrome('Bob')).toBe(true)
    expect(fn.isPalindrome('Madam')).toBe(true)
    expect(fn.isPalindrome('AbBa')).toBe(true)
    expect(fn.isPalindrome('')).toBe(true)
  })
})
describe('Thinkful - Logic Drills: Traffic light', () => {
  it('應正確更新交通信號燈', () => {
    expect(fn.updateLight('green')).toBe('yellow')
    expect(fn.updateLight('yellow')).toBe('red')
    expect(fn.updateLight('red')).toBe('green')
  })
})
describe('Get the Middle Character', () => {
  it('如果單詞的長度是奇數，返回中間字元。如果單詞的長度是偶數，返回中間的 2 個字元', () => {
    expect(fn.getMiddle('test')).toBe('es')
    expect(fn.getMiddle('testing')).toBe('t')
  })
})
describe('Remove String Spaces', () => {
  it('應從字串中移除所有的空格', () => {
    expect(fn.noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')).toBe('8j8mBliB8gimjB8B8jlB')
    expect(fn.noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')).toBe(
      '88Bifk8hB8BB8BBBB888chl8BhBfd'
    )
    expect(fn.noSpace('8aaaaa dddd r     ')).toBe('8aaaaaddddr')
    expect(fn.noSpace('')).toBe('')
  })
})
describe('Sum of the first nth term of Series', () => {
  it('應根據參數中的自然數 n，返回級數的前 n 項之和', () => {
    // 級數：1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
    expect(fn.SeriesSum(1)).toBe('1.00')
    expect(fn.SeriesSum(2)).toBe('1.25')
    expect(fn.SeriesSum(3)).toBe('1.39')
    expect(fn.SeriesSum(4)).toBe('1.49')
  })
})
describe('Correct the mistakes of the character recognition software', () => {
  it('應將 5 替換為 S、0 替換為 O、1 替換為 I', () => {
    expect(fn.correct('L0ND0N')).toBe('LONDON')
    expect(fn.correct('DUBL1N')).toBe('DUBLIN')
    expect(fn.correct('51NGAP0RE')).toBe('SINGAPORE')
    expect(fn.correct('BUDAPE5T')).toBe('BUDAPEST')
    expect(fn.correct('PAR15')).toBe('PARIS')
  })
})
describe('Powers of 2', () => {
  it('應返回 2 的次方數組', () => {
    expect(fn.powersOfTwo(0)).toStrictEqual([1])
    expect(fn.powersOfTwo(1)).toStrictEqual([1, 2])
    expect(fn.powersOfTwo(4)).toStrictEqual([1, 2, 4, 8, 16])
  })
})
describe('Double Char', () => {
  it('應將字串中的每個字元重複一次', () => {
    expect(fn.doubleChar('abcd')).toBe('aabbccdd')
    expect(fn.doubleChar('Adidas')).toBe('AAddiiddaass')
    expect(fn.doubleChar('1337')).toBe('11333377')
    expect(fn.doubleChar('illuminati')).toBe('iilllluummiinnaattii')
    expect(fn.doubleChar('123456')).toBe('112233445566')
    expect(fn.doubleChar('%^&*(')).toBe('%%^^&&**((')
  })
})
describe('String repeat', () => {
  it('應重複字串 n 次', () => {
    expect(fn.repeatStr(3, '*')).toBe('***')
  })
})
describe('What is between?', () => {
  it('應返回介於兩個數之間（包括兩個數）的所有整數', () => {
    expect(fn.between(1, 4)).toStrictEqual([1, 2, 3, 4])
    expect(fn.between(-2, 2)).toStrictEqual([-2, -1, 0, 1, 2])
  })
})
describe('Potenciation', () => {
  it('應返回 x 的 y 次方', () => {
    expect(fn.power(1, 701270)).toBe(1)
    expect(fn.power(2, 2)).toBe(4)
    expect(fn.power(3, 2)).toBe(9)
    expect(fn.power(-1, 40)).toBe(1)
  })
})
describe('Reversed sequence', () => {
  it('應返回一個包含整數從 n 到 1 的陣列', () => {
    expect(fn.reverseSeq(5)).toStrictEqual([5, 4, 3, 2, 1])
  })
})
describe('The falling speed of petals', () => {
  it('依據花瓣的下降速度，返回從某一樹枝飄落到地面的時間 (高度固定為400公分)', () => {
    expect(fn.sakuraFall(5)).toBe(80)
    expect(fn.sakuraFall(10)).toBe(40)
  })
  it('如果初始速度為非正數，則返回值應為 0', () => {
    expect(fn.sakuraFall(-1)).toBe(0)
  })
})
