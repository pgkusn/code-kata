import { describe, it, expect } from 'vitest'
import * as fn from './main'

describe('findOutlier', () => {
  it('應返回陣列中唯一的奇數或偶數', () => {
    expect(fn.findOutlier([0, 1, 2])).toBe(1)
    expect(fn.findOutlier([1, 2, 3])).toBe(2)
    expect(fn.findOutlier([2, 6, 8, 10, 3])).toBe(3)
    expect(fn.findOutlier([0, 0, 3, 0, 0])).toBe(3)
    expect(fn.findOutlier([1, 1, 0, 1, 1])).toBe(0)
  })
})

describe('Array.diff', () => {
  it('假設兩個陣列 a 和 b，將 a 中存在於 b 中的元素刪除並返回結果', () => {
    expect(fn.arrayDiff([], [4, 5])).toEqual([])
    expect(fn.arrayDiff([3, 4], [3])).toEqual([4])
    expect(fn.arrayDiff([1, 8, 2], [])).toEqual([1, 8, 2])
    expect(fn.arrayDiff([1, 2, 3], [1, 2])).toEqual([3])
  })
})

describe('Sum of Digits / Digital Root', () => {
  it('將一個數字的每位數字相加，並將總和的個位數當作結果返回', () => {
    expect(fn.digitalRoot(16)).toBe(7) // --> 1 + 6 = 7
    expect(fn.digitalRoot(456)).toBe(6) // -->  4 + 5 + 6 = 15  -->  1 + 5 = 6
  })
})

describe('Find the odd int', () => {
  it('應返回出現次數為奇數的數字', () => {
    expect(fn.findOdd([20, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 20, 4, 5, 4])).toBe(5)
    expect(fn.findOdd([10])).toBe(10)
    expect(fn.findOdd([1, 1, 2])).toBe(2)
    expect(fn.findOdd([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 3])).toBe(3)
  })
})

describe('Who likes it?', () => {
  it('應返回一個描述這些人是否點讚的字串', () => {
    expect(fn.likes([])).toBe('no one likes this')
    expect(fn.likes(['Peter'])).toBe('Peter likes this')
    expect(fn.likes(['Jacob', 'Alex'])).toBe('Jacob and Alex like this')
    expect(fn.likes(['Max', 'John', 'Mark'])).toBe('Max, John and Mark like this')
    expect(fn.likes(['Alex', 'Jacob', 'Mark', 'Max'])).toBe('Alex, Jacob and 2 others like this')
  })
})

describe('Stop gninnipS My sdroW!', () => {
  it('應反轉句子中五個以上字母的單字', () => {
    expect(fn.spinWords('Welcome')).toBe('emocleW')
    expect(fn.spinWords('Hey fellow warriors')).toBe('Hey wollef sroirraw')
    expect(fn.spinWords('This is a test')).toBe('This is a test')
    expect(fn.spinWords('This is another test')).toBe('This is rehtona test')
    expect(fn.spinWords('You are almost to the last test')).toBe('You are tsomla to the last test')
    expect(fn.spinWords('Just kidding there is still one more')).toBe(
      'Just gniddik ereht is llits one more'
    )
    expect(fn.spinWords('Seriously this is the last one')).toBe('ylsuoireS this is the last one')
  })
})

describe('Multiples of 3 or 5', () => {
  it('應找到小於傳入的數字且是 3 或 5 的倍數的所有自然數，並返回這些數字的和', () => {
    expect(fn.solution(10)).toBe(23) // 返回 23 (3 + 5 + 6 + 9)
    expect(fn.solution(20)).toBe(78) // 返回 78 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18)
  })

  it('如傳入的數字小於 0 時，應返回 0', () => {
    expect(fn.solution(-5)).toBe(0)
  })
})

describe('Only Duplicates', () => {
  it('應該返回字串中僅包含重複字符的部分', () => {
    expect(fn.onlyDuplicates('abccdefee')).toBe('cceee')
    expect(fn.onlyDuplicates('hello')).toBe('ll')
    expect(fn.onlyDuplicates('colloquial')).toBe('ollol')
    expect(fn.onlyDuplicates('foundersandcoders')).toBe('ondersndoders')
  })
})

describe('getCount 函數的測試', function () {
  it('應該正確計算出字串中母音字母的數量', function () {
    expect(fn.getCount('abracadabra')).toBe(5)
  })
})

describe('Form The Minimum', () => {
  it('當輸入為 [1, 3, 1] 時，應返回 13', () => {
    const expected = 13
    const actual = fn.minValue([1, 3, 1])

    expect(actual).to.eql(expected)
  })

  it('當輸入為 [4, 7, 5, 7] 時，應返回 457', () => {
    const expected = 457
    const actual = fn.minValue([4, 7, 5, 7])

    expect(actual).to.eql(expected)
  })
})

describe('Printer Errors', () => {
  it('應返回一個字串，格式為"錯誤個數/總字母數"', () => {
    expect(fn.printerError('aaabbbbhaijjjm')).toBe('0/14')
    expect(fn.printerError('aaaxbbbbyyhwawiwjjjwwm')).toBe('8/22')
  })
})

describe("What's the real floor?", function () {
  it('應該返回實際樓層數', () => {
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
