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
  well,
  gooseFilter,
  sumMix,
  fakeBin,
  stringToArray,
  isVow,
  twoSort,
  findAverage,
  countPositivesSumNegatives,
  removeEveryOther,
  arr2bin,
  uefaEuro2016,
  first,
  differenceInAges,
  positiveSum,
  logicalCalc,
  array,
  arrayMadness,
  stairsIn20,
  monkeyCount,
  addLength,
  eachCons,
  squareSum,
  findNeedle,
  getAverage,
  divisibleBy,
  digitize,
  countBy,
  all,
  present,
  pak,
  baublesOnTree,
  fifa,
  filterHomogenous,
  boatLoader,
  numObj,
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
describe('Well of Ideas - Easy Version', () => {
  it('如果有一個或兩個好點子，則返回 "Publish!"', () => {
    expect(well(['bad', 'bad', 'bad'])).toBe('Fail!')
  })
  it('如果有超過兩個好點子，則返回 "I smell a series!"', () => {
    expect(well(['good', 'bad', 'bad', 'bad', 'bad'])).toBe('Publish!')
  })
  it('如果沒有好點子，則返回 "Fail!"', () => {
    expect(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])).toBe(
      'I smell a series!'
    )
  })
})
describe('Filter out the geese', () => {
  it('Mixed list', () => {
    expect(
      gooseFilter([
        'Mallard',
        'Hook Bill',
        'African',
        'Crested',
        'Pilgrim',
        'Toulouse',
        'Blue Swedish',
      ])
    ).toEqual(['Mallard', 'Hook Bill', 'Crested', 'Blue Swedish'])
  })
  it('No geese', () => {
    expect(gooseFilter(['Mallard', 'Barbary', 'Hook Bill', 'Blue Swedish', 'Crested'])).toEqual([
      'Mallard',
      'Barbary',
      'Hook Bill',
      'Blue Swedish',
      'Crested',
    ])
  })
  it('All geese', () => {
    expect(gooseFilter(['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'])).toEqual(
      []
    )
  })
})
describe('Sum Mixed Array', () => {
  it('應回傳正確的總和', () => {
    expect(sumMix([9, 3, '7', '3'])).toBe(22)
    expect(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])).toBe(42)
    expect(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])).toBe(41)
  })
})
describe('Fake Binary', () => {
  it('應回傳轉換後的字串', () => {
    expect(fakeBin('45385593107843568')).toBe('01011110001100111')
    expect(fakeBin('509321967506747')).toBe('101000111101101')
    expect(fakeBin('366058562030849490134388085')).toBe('011011110000101010000011011')
  })
})
describe('Convert a string to an array', () => {
  it('應回傳分割後的字串並將其轉換為單詞陣列', () => {
    expect(stringToArray('Robin Singh')).toEqual(['Robin', 'Singh'])
    expect(stringToArray('I love arrays they are my favorite')).toEqual([
      'I',
      'love',
      'arrays',
      'they',
      'are',
      'my',
      'favorite',
    ])
  })
})
describe('Is there a vowel in there?', () => {
  it('應回傳正確的陣列內容', () => {
    expect(isVow([118, 117, 120])).toEqual([118, 'u', 120])
    expect(isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103])).toEqual([
      'e',
      121,
      110,
      113,
      113,
      103,
      121,
      121,
      'e',
      107,
      103,
    ])
  })
})
describe('Sort and Star', () => {
  it('應回傳排序後的字串，並用 *** 分隔', () => {
    expect(
      twoSort(['bitcoin', 'take', 'over', 'the', 'world', 'maybe', 'who', 'knows', 'perhaps'])
    ).toBe('b***i***t***c***o***i***n')
    expect(
      twoSort([
        'turns',
        'out',
        'random',
        'test',
        'cases',
        'are',
        'easier',
        'than',
        'writing',
        'out',
        'basic',
        'ones',
      ])
    ).toBe('a***r***e')
  })
})
describe('Calculate average', () => {
  it('應回傳正確的平均數字', () => {
    expect(findAverage([1, 1, 1])).toBe(1)
    expect(findAverage([1, 2, 3])).toBe(2)
    expect(findAverage([1, 2, 3, 4])).toBe(2.5)
  })
  it('如為空陣列應回傳0', () => {
    expect(findAverage([])).toEqual(0)
  })
})
describe('Count of positives / sum of negatives', () => {
  it('應回傳一個陣列，其中第一個元素是正數的數量，第二個元素是負數的總和', () => {
    expect(
      countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
    ).toEqual([10, -65])
    expect(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])).toEqual(
      [8, -50]
    )
  })
})
describe('Removing Elements', () => {
  it('應該保留第一個元素並移除每個第二個元素', () => {
    expect(removeEveryOther(['Keep', 'Remove', 'Keep', 'Remove', 'Keep'])).toEqual([
      'Keep',
      'Keep',
      'Keep',
    ])
    expect(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 3, 5, 7, 9])
    expect(removeEveryOther(['a', 'b', 'c', 'd', 'e', 'f'])).toEqual(['a', 'c', 'e'])
  })
})
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
describe('UEFA EURO 2016', () => {
  it('應該返回正確的比賽結果字串', () => {
    expect(uefaEuro2016(['Germany', 'Ukraine'], [2, 0])).toEqual(
      'At match Germany - Ukraine, Germany won!'
    )
    expect(uefaEuro2016(['Belgium', 'Italy'], [0, 2])).toEqual(
      'At match Belgium - Italy, Italy won!'
    )
    expect(uefaEuro2016(['Portugal', 'Iceland'], [1, 1])).toEqual(
      'At match Portugal - Iceland, teams played draw.'
    )
  })
})
describe('pick a set of first elements', () => {
  it('應該返回正確的結果', () => {
    expect(first(['a', 'b', 'c', 'd', 'e'])).toEqual(['a'])
    expect(first(['a', 'b', 'c', 'd', 'e'], 2)).toEqual(['a', 'b'])
    expect(first(['a', 'b', 'c', 'd', 'e'], 3)).toEqual(['a', 'b', 'c'])
    expect(first(['a', 'b', 'c', 'd', 'e'], 0)).toEqual([])
  })
})
describe('Find the Difference in Age between Oldest and Youngest Family Members', () => {
  it('應該返回正確的年齡差陣列', () => {
    expect(differenceInAges([82, 15, 6, 38, 35])).toEqual([6, 82, 76])
    expect(differenceInAges([57, 99, 14, 32])).toEqual([14, 99, 85])
    expect(differenceInAges([5, 10, 15, 20, 25])).toEqual([5, 25, 20])
  })
})
describe('Sum of positive', () => {
  it('應該返回所有正數的總和', () => {
    expect(positiveSum([1, -4, 7, 12])).toBe(20)
    expect(positiveSum([-1, -4, -7])).toBe(0) // 沒有正數，應該返回 0
    expect(positiveSum([])).toBe(0) // 空陣列，應該返回 0
    expect(positiveSum([0, 0, 0])).toBe(0) // 沒有正數，應該返回 0
    expect(positiveSum([1, 2, 3, 4, 5])).toBe(15) // 所有元素都是正數
  })
})
describe('Logical calculator', () => {
  it('應根據指定的邏輯運算符來計算結果', () => {
    expect(logicalCalc([true, true, false], 'AND')).toBe(false)
    expect(logicalCalc([true, true, false], 'OR')).toBe(true)
    expect(logicalCalc([true, true, false], 'XOR')).toBe(false)
    expect(logicalCalc([false, false, false], 'AND')).toBe(false)
    expect(logicalCalc([true, true, true], 'OR')).toBe(true)
  })
})
describe('Remove First and Last Character Part Two', () => {
  it('應刪除第一個和最後一個序列並用空格分隔', () => {
    expect(array('1,2,3')).toBe('2')
    expect(array('1,2,3,4')).toBe('2 3')
    expect(array('1,2,3,4,5')).toBe('2 3 4')
    // 測試空字串的情況
    expect(array('')).toBeNull()
    // 測試只有一個序列的情況
    expect(array('1')).toBeNull()
    // 測試只有兩個序列的情況
    expect(array('1,2')).toBeNull()
  })
})
describe('Array Madness', () => {
  it('應該返回 true 如果 a 中每個元素的平方和大於 b 中每個元素的立方和', () => {
    expect(arrayMadness([4, 5, 6], [1, 2, 3])).toBe(true)
    expect(arrayMadness([1, 2, 3], [4, 5, 6])).toBe(false)
    expect(arrayMadness([1, 2, 3, 4], [1, 2, 3])).toBe(false)
    expect(arrayMadness([2, 3, 4], [1, 2, 3, 4])).toBe(false)
    expect(arrayMadness([1, 2, 3], [3, 2, 1])).toBe(false)
  })
})
describe('How many stairs will Suzuki climb in 20 years?', () => {
  it('應計算 20 年內可能爬的階梯數', () => {
    const sunday = [
        6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940,
        8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859,
        6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602,
        5312, 7836, 8032, 9871, 5990, 6309, 7825,
      ],
      monday = [
        9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719, 6648, 8180, 7944,
        5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221, 5702, 5252, 7041, 7287,
        5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842, 7466, 7321, 6785, 8770, 8108, 7985,
        5186, 9021, 9098, 6099, 5828, 7217, 9387,
      ],
      tuesday = [
        8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292, 7552, 5370, 7579,
        9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313, 7761, 9853, 7937, 9268,
        7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493, 5265, 5815, 7191, 9515, 7825, 9508,
        6878, 7180, 8756, 5717, 7555, 9447, 7703,
      ],
      wednesday = [
        6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 5047, 6601, 8303, 9118,
        5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710, 5182, 9142, 9415, 9710, 7342,
        9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698, 9492, 6973, 6531, 7698, 8994, 8058, 6406,
        5738, 7500, 8357, 7378, 9598, 5405, 9493,
      ],
      thursday = [
        6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197, 9866, 6609, 6308,
        7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402, 9638, 9925, 5508, 8636,
        5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548, 5066, 7107, 6911, 9302, 5202, 7487,
        5593, 8620, 8858, 5360, 6638, 8012, 8701,
      ],
      friday = [
        5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362, 6200, 6781,
        8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501, 9177, 8384, 8229, 8781,
        9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617, 5078, 8910, 6732, 9848, 8951, 9407,
        6699, 9842, 7455, 8720, 5725, 6960, 5127,
      ],
      saturday = [
        5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943, 5460, 9979,
        5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003, 5524, 9870, 6591, 8616,
        5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838, 7150, 6567, 8524, 7613, 7809, 5562,
        7799, 7179, 5184, 7960, 9455, 5633, 9085,
      ]
    const stairsData = [sunday, monday, tuesday, wednesday, thursday, friday, saturday]
    expect(stairsIn20(stairsData)).toBe(54636040)
  })
})
describe('Count the Monkeys!', () => {
  it('應生成包含從 1 到 n 的所有數字的陣列', () => {
    expect(monkeyCount(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(monkeyCount(1)).toEqual([1])
    expect(monkeyCount(5)).toEqual([1, 2, 3, 4, 5])
    expect(monkeyCount(0)).toEqual([]) // 沒有猴子
  })
})
describe('Add Length', () => {
  it('應將每個單詞的長度添加到該單詞的末尾，並返回陣列', () => {
    expect(addLength('apple ban')).toEqual(['apple 5', 'ban 3'])
    expect(addLength('you will win')).toEqual(['you 3', 'will 4', 'win 3'])
    expect(addLength('test')).toEqual(['test 4']) // 單詞只有一個
    expect(addLength('hello world of code')).toEqual(['hello 5', 'world 5', 'of 2', 'code 4']) // 多個單詞
  })
})
describe('Cascading Subsets', () => {
  it('應返回大小為 n 的列表的級聯子集', () => {
    expect(eachCons([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [2, 3],
      [3, 4],
    ])
    expect(eachCons([1, 2, 3, 4], 3)).toEqual([
      [1, 2, 3],
      [2, 3, 4],
    ])
    expect(eachCons([5, 6, 7, 8, 9], 2)).toEqual([
      [5, 6],
      [6, 7],
      [7, 8],
      [8, 9],
    ])
    expect(eachCons([1, 2, 3, 4, 5, 6], 4)).toEqual([
      [1, 2, 3, 4],
      [2, 3, 4, 5],
      [3, 4, 5, 6],
    ])
    expect(eachCons([], 3)).toEqual([])
  })
  it('如 n 小於 1 時，應返回空陣列', () => {
    expect(eachCons([4, 9, 3], 0)).toEqual([])
  })
  it('如 n 大於陣列長度時，應返回空陣列', () => {
    expect(eachCons([4, 9, 3], 4)).toEqual([])
  })
})
describe('Square(n) Sum', () => {
  it('應將每個數字平方後相加', () => {
    expect(squareSum([1, 2, 2])).toBe(9)
    expect(squareSum([3, 4, 5])).toBe(50)
    expect(squareSum([0, 0, 0])).toBe(0) // 所有數字都是 0
    expect(squareSum([2, 2, 2, 2])).toBe(16) // 多個相同的數字
  })
})
describe('A Needle in the Haystack', () => {
  it('應找到針並返回正確的消息', () => {
    expect(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])).toBe(
      'found the needle at position 5'
    )
    expect(findNeedle(['one', 'two', 'three', 'needle'])).toBe('found the needle at position 3')
    expect(findNeedle(['no', 'needle', 'here'])).toBe('found the needle at position 1')
    expect(findNeedle(['not', 'in', 'this', 'array'])).toBe('needle not found')
  })
})
describe('Get the mean of an array', () => {
  it('應計算並返回平均成績', () => {
    expect(getAverage([2, 2, 2, 2])).toBe(2)
    expect(getAverage([1, 2, 3, 4, 5])).toBe(3)
    expect(getAverage([1, 1, 1, 1, 1, 1, 1, 2])).toBe(1)
  })
  it('當平均成績有小數點時，應無條件捨去', () => {
    expect(getAverage([85, 90, 92, 88, 78])).toBe(86)
  })
})
describe('Find numbers which are divisible by given number', () => {
  it('應返回所有可以被給定除數整除的數字', () => {
    expect(divisibleBy([1, 2, 3, 4, 5, 6], 2)).toEqual([2, 4, 6])
    expect(divisibleBy([10, 20, 30, 40, 50], 5)).toEqual([10, 20, 30, 40, 50]) // 所有數字都可以被 5 整除
    expect(divisibleBy([7, 9, 13, 17, 21], 3)).toEqual([9, 21]) // 只有部分數字可以被 3 整除
    expect(divisibleBy([1, 2, 3, 4, 5, 6], 7)).toEqual([]) // 沒有數字可以被 7 整除
  })
})
describe('Convert number to reversed array of digits', () => {
  it('應返回數字按相反順序排列在陣列中', () => {
    expect(digitize(35231)).toEqual([1, 3, 2, 5, 3])
    expect(digitize(0)).toEqual([0])
    expect(digitize(12345)).toEqual([5, 4, 3, 2, 1])
    expect(digitize(9876543210)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})
describe('Count by X', () => {
  it('應返回前 n 個 x 的倍數的陣列', () => {
    expect(countBy(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(countBy(2, 5)).toEqual([2, 4, 6, 8, 10])
    expect(countBy(3, 7)).toEqual([3, 6, 9, 12, 15, 18, 21])
    expect(countBy(4, 3)).toEqual([4, 8, 12])
  })
})
describe('Enumerable Magic #1 - True for All?', () => {
  it('應根據函數返回值判斷是否全部符合條件', () => {
    expect(all([1, 2, 3, 4, 5], v => v < 9)).toBe(true)
    expect(all([1, 2, 3, 4, 5], v => v > 9)).toBe(false)
  })
})
describe('Birthday II - Presents', () => {
  it('應根據描述返回正確的結果', () => {
    expect(present('goodpresent', 9)).toBe('pxxmy{n|nw}')
    expect(present('crap', 10)).toBe('acpr')
    expect(present('bang', 5)).toBe(388)
    expect(present('badpresent', 3)).toBe('Take this back!')
    expect(present('dog', 4)).toBe('pass out from excitement 4 times')
  })
})
describe('Holiday VII - Local Talk', () => {
  it('應將單詞之間插入 "pak"', () => {
    expect(pak('Hello world')).toBe('Hello pak world')
    expect(pak('How are you?')).toBe('How pak are pak you?')
    expect(pak(' ')).toBe('')
  })
})
describe('Christmas baubles on the tree', () => {
  it('應返回每個樹枝上的綵球陣列', () => {
    expect(baublesOnTree(10, 2)).toEqual([5, 5])
    expect(baublesOnTree(5, 7)).toEqual([1, 1, 1, 1, 1, 0, 0])
    expect(baublesOnTree(12, 5)).toEqual([3, 3, 2, 2, 2])
    expect(baublesOnTree(0, 10)).toStrictEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    expect(baublesOnTree(5, 0)).toBe('Grandma, we will have to buy a Christmas tree first!')
  })
})
describe('Fifa 17 Launch', () => {
  it('應計算總獲獎金額', () => {
    expect(fifa({ Home: '£75', Away: '£5000', Draw: '£1324' }, ['1-0', '2-3', '0-1'])).toBe('£5075')
  })
})
describe('Homogenous arrays', () => {
  it('應過濾符合條件的子陣列', () => {
    expect(filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]])).toEqual([
      [1, 5, 4],
      ['b'],
    ])

    expect(filterHomogenous([[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []])).toEqual([
      [123, 234, 432],
      ['', 'abc'],
      [''],
      ['', '1'],
    ])
  })
})
describe("Noye's Fludde", () => {
  it('應將動物成對排列並排除數字', () => {
    expect(boatLoader(['g', 'c', 'h', 'c', 'g', 'm'])).toEqual([
      ['c', 'c'],
      ['g', 'g'],
    ])

    expect(
      boatLoader([
        'a',
        'd',
        'G',
        'V',
        'X',
        'F',
        'g',
        'h',
        's',
        'r',
        'a',
        'g',
        'n',
        's',
        'e',
        'r',
        'j',
        'a',
        'f',
        'D',
        'F',
        'G',
        'R',
        'H',
        'C',
        'X',
        'B',
        'N',
        'G',
        'U',
        'G',
        'F',
        'p',
        's',
        'r',
        'g',
        'a',
      ])
    ).toEqual([
      ['a', 'a'],
      ['F', 'F'],
      ['G', 'G'],
      ['g', 'g'],
      ['r', 'r'],
      ['s', 's'],
      ['X', 'X'],
    ])

    expect(boatLoader(['g', 'g', 'G', 'c', 'p', 'x', 'z', 'Z', 'G', 'c', 'g', 'g'])).toEqual([
      ['c', 'c'],
      ['G', 'G'],
      ['g', 'g'],
    ])

    expect(
      boatLoader([5, 6, 5, 'g', 'g', 'G', 'c', 'p', 'x', 'z', 'Z', 'G', 'c', 'g', 'g'])
    ).toEqual([
      ['c', 'c'],
      ['G', 'G'],
      ['g', 'g'],
    ])
  })
})
describe('Numbers to Objects', () => {
  it('應返回對應的物件陣列', () => {
    expect(numObj([118, 117, 120])).toEqual([{ 118: 'v' }, { 117: 'u' }, { 120: 'x' }])

    expect(numObj([101, 121, 110, 113, 113, 103])).toEqual([
      { 101: 'e' },
      { 121: 'y' },
      { 110: 'n' },
      { 113: 'q' },
      { 113: 'q' },
      { 103: 'g' },
    ])
  })
})
