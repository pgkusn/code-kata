import { describe, it, expect } from 'vitest'
import * as fn from './main'

describe('Break camelCase', () => {
  it('應將駝峰式命名的字串拆分，在每個大寫字母之前插入一個空格', () => {
    expect(fn.breakCamelCase('')).toBe('')
    expect(fn.breakCamelCase('camelCasing')).toBe('camel Casing')
    expect(fn.breakCamelCase('camelCasingTest')).toBe('camel Casing Test')
  })
})

describe('Count the smiley faces!', () => {
  it('應返回笑臉表情符號的數量', () => {
    expect(fn.countSmileys([])).toBe(0)
    expect(fn.countSmileys([':D', ':~)', ';~D', ':)'])).toBe(4)
    expect(fn.countSmileys([':)', ':(', ':D', ':O', ':;'])).toBe(2)
    expect(fn.countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1)
  })
})

describe('Delete occurrences of an element if it occurs more than n times', () => {
  it('應刪除多餘次數的元素', () => {
    expect(fn.deleteNth([20, 37, 20, 21], 1)).toEqual([20, 37, 21])
    expect(fn.deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)).toEqual([1, 1, 3, 3, 7, 2, 2, 2])
    expect(fn.deleteNth([12, 39, 19, 39, 39, 19, 12], 1)).toEqual([12, 39, 19])
  })
})

describe('Build Tower', () => {
  it('應返回一個包含塔每一層的字串陣列', () => {
    expect(fn.towerBuilder(1)).toEqual(['*'])
    expect(fn.towerBuilder(2)).toEqual([' * ', '***'])
    expect(fn.towerBuilder(3)).toEqual(['  *  ', ' *** ', '*****'])
  })
})

describe('Find the missing letter', () => {
  it('應返回陣列中缺少的字母', () => {
    expect(fn.findMissingLetter(['a', 'b', 'c', 'd', 'f'])).toBe('e')
    expect(fn.findMissingLetter(['O', 'Q', 'R', 'S'])).toBe('P')
    expect(fn.findMissingLetter([])).toBe('')
  })
})

describe('Sort the odd', () => {
  it('應返回正確的數字陣列', () => {
    expect(fn.sortArray([5, 3, 2, 8, 1, 4])).toEqual([1, 3, 2, 8, 5, 4])
    expect(fn.sortArray([5, 3, 1, 8, 0])).toEqual([1, 3, 5, 8, 0])
    expect(fn.sortArray([])).toEqual([])
  })
})

describe('Find the unique number', () => {
  it('應返回陣列中唯一的數字', () => {
    expect(fn.findUniq([1, 1, 1, 2, 1, 1])).toBe(2)
    expect(fn.findUniq([0, 0, 0.55, 0, 0])).toBe(0.55)
  })
})

describe('Split Strings', () => {
  it('應將給定的字串拆分成長度為兩個字元的子串', () => {
    expect(fn.splitStrings('abcdef')).toEqual(['ab', 'cd', 'ef']) // "字串為: 'abcdef'"
    expect(fn.splitStrings('abcdefg')).toEqual(['ab', 'cd', 'ef', 'g_']) // "字串為: 'abcdefg'"
    expect(fn.splitStrings('')).toEqual([]) // "字串為: ''"
  })
})

describe('Equal Sides Of An Array', () => {
  it('應返回正確的結果', () => {
    expect(fn.findEvenIndex([1, 2, 3, 4, 3, 2, 1])).toBe(3) // "陣列為: [1,2,3,4,3,2,1]"
    expect(fn.findEvenIndex([1, 100, 50, -51, 1, 1])).toBe(1) // "陣列為: [1,100,50,-51,1,1]"
    expect(fn.findEvenIndex([1, 2, 3, 4, 5, 6])).toBe(-1) // "陣列為: [1,2,3,4,5,6]"
    expect(fn.findEvenIndex([20, 10, 30, 10, 10, 15, 35])).toBe(3) // "陣列為: [20,10,30,10,10,15,35]"
  })
})

describe('Playing with digits', () => {
  it('應返回正確的結果', () => {
    expect(fn.digPow(89, 1)).toBe(1) // 返回 1 (因為 8^1 + 9^2 = 89 = 89 * 1)
    expect(fn.digPow(92, 1)).toBe(-1) // 返回 -1 (因為 9^1 + 2^2 = 13，無法被 92 整除)
    expect(fn.digPow(46288, 3)).toBe(51) // 返回 51 (因為 4^3 + 6^4 + 2^5 + 8^6 + 8^7 = 2360688 = 46288 * 51)
  })
})

describe('Detect Pangram', () => {
  it('應判斷是否為全字母句', () => {
    expect(fn.isPangram('The quick brown fox jumps over the lazy dog.')).toBe(true) // 'The quick brown fox jumps over the lazy dog.' 是全字母句
    expect(fn.isPangram('This is not a pangram.')).toBe(false) // 'This is not a pangram.' 不是全字母句
    expect(fn.isPangram('123')).toBe(false)
  })
})

describe('Unique In Order', () => {
  it('應返回一個沒有相鄰重複元素的陣列，並保持原有順序', () => {
    expect(fn.uniqueInOrder('AAAABBBCCDAABBB')).toEqual(['A', 'B', 'C', 'D', 'A', 'B'])
  })
})

describe('Tribonacci Sequence', () => {
  it('應返回指定長度的泰波拿契數列', () => {
    expect(fn.tribonacci([1, 1, 1], 10)).toEqual([1, 1, 1, 3, 5, 9, 17, 31, 57, 105])
    expect(fn.tribonacci([0, 0, 1], 10)).toEqual([0, 0, 1, 1, 2, 4, 7, 13, 24, 44])
    expect(fn.tribonacci([0, 1, 1], 10)).toEqual([0, 1, 1, 2, 4, 7, 13, 24, 44, 81])
    expect(fn.tribonacci([1, 0, 0], 10)).toEqual([1, 0, 0, 1, 1, 2, 4, 7, 13, 24])
    expect(fn.tribonacci([0, 0, 0], 10)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    expect(fn.tribonacci([1, 2, 3], 10)).toEqual([1, 2, 3, 6, 11, 20, 37, 68, 125, 230])
    expect(fn.tribonacci([3, 2, 1], 10)).toEqual([3, 2, 1, 6, 9, 16, 31, 56, 103, 190])
    expect(fn.tribonacci([1, 1, 1], 1)).toEqual([1])
    expect(fn.tribonacci([2, 10, 2], 2)).toEqual([2, 10])
    expect(fn.tribonacci([300, 200, 100], 0)).toEqual([])
    expect(fn.tribonacci([0.5, 0.5, 0.5], 30)).toEqual([
      0.5, 0.5, 0.5, 1.5, 2.5, 4.5, 8.5, 15.5, 28.5, 52.5, 96.5, 177.5, 326.5, 600.5, 1104.5,
      2031.5, 3736.5, 6872.5, 12640.5, 23249.5, 42762.5, 78652.5, 144664.5, 266079.5, 489396.5,
      900140.5, 1655616.5, 3045153.5, 5600910.5, 10301680.5,
    ])
  })
})

describe('Your order, please', () => {
  it('應返回一個根據單詞中數字順序排序後的字串', () => {
    expect(fn.order('is2 Thi1s T4est 3a')).toBe('Thi1s is2 3a T4est')
    expect(fn.order('is2 This T4est 3a')).toBe('is2 This 3a T4est')
    expect(fn.order('4of Fo1r pe6ople g3ood th5e the2')).toBe('Fo1r the2 g3ood 4of th5e pe6ople')
    expect(fn.order('')).toBe('')
  })
})

describe('Does my number look big in this?', () => {
  it('應判斷數字是否為阿姆斯壯數', () => {
    expect(fn.narcissistic(7)).toBe(true)
    expect(fn.narcissistic(153)).toBe(true)
    expect(fn.narcissistic(1634)).toBe(true)
  })
})

describe('Convert string to camel case', () => {
  it('應返回空字串', () => {
    expect(fn.toCamelCase('')).toBe('')
  })

  it("應將 'the_stealth_warrior' 轉換為 'theStealthWarrior'", () => {
    expect(fn.toCamelCase('the_stealth_warrior')).toBe('theStealthWarrior')
  })

  it("應將 'The-Stealth-Warrior' 轉換為 'TheStealthWarrior'", () => {
    expect(fn.toCamelCase('The-Stealth-Warrior')).toBe('TheStealthWarrior')
  })

  it("應將 'A-B-C' 轉換為 'ABC'", () => {
    expect(fn.toCamelCase('A-B-C')).toBe('ABC')
  })
})

describe('Persistent Bugger', () => {
  it('應返回 39 的持續性為 3', () => {
    expect(fn.persistence(39)).toBe(3)
  })

  it('應返回 4 的持續性為 0', () => {
    expect(fn.persistence(4)).toBe(0)
  })

  it('應返回 25 的持續性為 2', () => {
    expect(fn.persistence(25)).toBe(2)
  })

  it('應返回 999 的持續性為 4', () => {
    expect(fn.persistence(999)).toBe(4)
  })
})

describe('alphabetPosition', () => {
  it('應返回 "The sunset sets at twelve o\' clock." 的正確位置', () => {
    expect(fn.alphabetPosition("The sunset sets at twelve o' clock.")).toBe(
      '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
    )
  })

  it('應返回 "The narwhal bacons at midnight." 的正確位置', () => {
    expect(fn.alphabetPosition('The narwhal bacons at midnight.')).toBe(
      '20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20'
    )
  })

  it('當沒有任何英文字母時，應返回空字串', () => {
    expect(fn.alphabetPosition('123')).toBe('')
  })
})

describe('Take a Ten Minutes Walk', () => {
  it('如有用十步走完並回到原點，應返回 true', () => {
    expect(fn.isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toBe(true)
  })

  it('如未用十步走完並回到原點，應返回 false', () => {
    expect(fn.isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])).toBe(false)
    expect(fn.isValidWalk(['w'])).toBe(false)
    expect(fn.isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toBe(false)
  })
})

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
    expect(fn.getRealFloor(-1)).toBe(-1)
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
