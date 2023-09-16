/**
 * Gravity Flip
 * 重力翻轉
 * @param {string} d
 * @param {number[]} a
 * @returns {number[]}
 */
export function flip(d, a) {
  if (d === 'R') {
    return a.sort((a, b) => a - b)
  } else if (d === 'L') {
    return a.sort((a, b) => b - a)
  }

  // better
  // return a.sort((a, b) => (d === 'R' ? a - b : b - a))
}
/**
 * A wolf in sheep's clothing
 * 狼穿著羊皮
 * @param {string[]} queue
 * @returns {string}
 */
export function warnTheSheep(queue) {
  const ary = [...queue].reverse()
  const n = ary.findIndex(item => item === 'wolf')
  return n === 0
    ? 'Pls go away and stop eating my sheep'
    : `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`

  // better
  // const n = [...queue].reverse().indexOf('wolf')
  // return n === 0
  //   ? 'Pls go away and stop eating my sheep'
  //   : `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`
}
/**
 * Total amount of points
 * 總分計算
 * @param {string[]} games
 * @returns {number}
 */
export function points(games) {
  return games.reduce((previousValue, currentValue) => {
    const [x, y] = currentValue.split(':')
    if (x > y) return previousValue + 3
    if (x < y) return previousValue
    if (x === y) return previousValue + 1
  }, 0)
}
/**
 * Sum of differences in array
 * 陣列差值總和
 * @param {number[]} arr
 * @returns {number}
 */
export function sumOfDifferences(arr) {
  if (arr.length < 2) return 0
  const sortedArr = [...arr].sort((a, b) => b - a)
  return sortedArr.reduce((previousValue, currentValue, currentIndex) => {
    const next = sortedArr[currentIndex + 1]
    return previousValue + (currentValue - next || 0)
  }, 0)
}
/**
 * Multiple of index
 * 索引倍數
 * @param {number[]} array
 * @returns {number[]}
 */
export function multipleOfIndex(array) {
  return array.filter((item, index) => (item === 0 ? true : item % index === 0))

  // better
  // return array.filter((item, index) => item === 0 || item % index === 0)
}
/**
 * CSV representation of array
 * 陣列的 CSV 表示法
 * @param {number[][]} array
 * @returns {string}
 */
export function toCsvText(array) {
  return array.map(item => item.join()).join('\n')

  // better
  // return array.join('\n')
}
/**
 * Array plus array
 * 陣列相加
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number}
 */
export function arrayPlusArray(arr1, arr2) {
  const arr = [...arr1, ...arr2]
  return arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}
/**
 * Find the first non-consecutive number
 * 找到第一個非連續數字
 * @param {number[]} arr
 * @returns {(number|null)}
 */
export function firstNonConsecutive(arr) {
  return arr.find((n, i) => i && n - 1 !== arr[i - 1]) ?? null
}
/**
 * Find Multiples of a Number
 * 找到數字的倍數
 * @param {number} integer
 * @param {number} limit
 * @returns {number[]}
 */
export function findMultiples(integer, limit) {
  const result = []
  for (let n = integer; n <= limit; n += integer) {
    result.push(n)
  }
  return result
}
/**
 * Invert values
 * 反轉數字元號
 * @param {number[]} array
 * @returns {number[]}
 */
export function invert(array) {
  return array.map(n => n * -1 || 0)

  // better
  // return array.map(n => -n || 0)
}
/**
 * Merge two sorted arrays into one
 * 將兩個排序好的陣列合併成一個
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
export function mergeArrays(arr1, arr2) {
  const setObj = new Set([...arr1, ...arr2])
  return Array.from(setObj).sort((a, b) => a - b)
}
/**
 * Duck Duck Goose
 * 鴨子、鴨子、鵝
 * @param {object[]} players
 * @param {number} goose
 */
export function duckDuckGoose(players, goose) {
  return players[(goose - 1) % players.length].name
}
/**
 * Beginner - Lost Without a Map
 * 基礎 - 一張地圖也不會丟
 * @param {number[]} x
 * @returns {number[]}
 */
export function maps(x) {
  return x.map(n => n * 2)
}
/**
 * Beginner - Reduce but Grow
 * 基礎 - 縮減但成長
 * @param {number[]} x
 * @returns {number}
 */
export function grow(x) {
  return x.reduce((previousValue, currentValue, currentIndex) => {
    if (currentIndex === 0) return previousValue
    return previousValue * currentValue
  }, x[0])

  // better
  // return x.reduce((a, b) => a * b, 1)

  // best
  // return x.reduce((a, b) => a * b)
}
/**
 * To square(root) or not to square(root)
 * 要平方根還是不要平方根
 * @param {number[]} array
 * @returns {number[]}
 */
export function squareOrSquareRoot(array) {
  return array.map(n => (Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : n ** 2))
}
/**
 * I love you, a little , a lot, passionately ... not at all
 * 我愛你，一點點，很多，熱情...一點也不
 * @param {number} nbPetals
 * @returns {string}
 */
export function howMuchILoveYou(nbPetals) {
  const phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
  return phrases[(nbPetals - 1) % phrases.length]
}
/**
 * Well of Ideas - Easy Version
 * 點子之井 - 簡易版
 * @param {string[]} x
 * @returns {string}
 */
export function well(x) {
  const filtered = x.filter(item => item === 'good')
  if (filtered.length > 2) {
    return 'I smell a series!'
  } else if (filtered.length > 0) {
    return 'Publish!'
  } else {
    return 'Fail!'
  }
}
/**
 * Filter out the geese
 * 過濾出大雁
 * @param {string[]} birds
 * @returns {string[]}
 */
export function gooseFilter(birds) {
  var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher']
  return birds.filter(item => !geese.includes(item))
}
/**
 * Sum Mixed Array
 * 求和混合陣列
 * @param {(string | number)[]} x
 * @returns {number}
 */
export function sumMix(x) {
  return x.reduce((previousValue, currentValue) => {
    // @ts-ignore
    return previousValue + Number(currentValue)
  }, 0)

  // or
  // return x.map(a => +a).reduce((a, b) => a + b)
}
/**
 * Fake Binary
 * 假二進制
 * @param {string} x
 * @returns {string}
 */
export function fakeBin(x) {
  return x
    .split('')
    .map(n => (+n < 5 ? '0' : '1'))
    .join('')

  // better
  // @ts-ignore
  // return x.replace(/\d/g, d => (d < 5 ? 0 : 1))
}
/**
 * Convert a string to an array
 * 將字串轉為陣列
 * @param {string} string
 * @returns {string[]}
 */
export function stringToArray(string) {
  return string.split(' ')
}
/**
 * Is there a vowel in there?
 * 是否有元音字母？
 * @param {number[]} a
 * @returns {(number|string)[]}
 */
export function isVow(a) {
  const vowels = ['a', 'e', 'i', 'o', 'u'] // or 'aeiou'
  return a.map(n => {
    const s = String.fromCharCode(n)
    return vowels.includes(s) ? s : n
  })
}
/**
 * Sort and Star
 * 排序並用星號隔開
 * @param {string[]} s
 * @returns {string}
 */
export function twoSort(s) {
  const sortedArray = [...s].sort()
  return sortedArray[0].split('').join('***')
}
/**
 * Calculate average
 * 計算平均值
 * @param {number[]} array
 * @returns {number}
 */
export function findAverage(array) {
  const total = array.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  return total / array.length || 0
}
/**
 * Count of positives / sum of negatives
 * 正數個數 / 負數總和
 * @param {number[]} input
 * @returns {number[]}
 */
export function countPositivesSumNegatives(input) {
  if (!input || !input.length) return []
  const positivesCount = input.filter(n => n > 0).length
  const negativeTotal = input
    .filter(n => n < 0)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  return [positivesCount, negativeTotal]
}
/**
 * Removing Elements
 * 移除元素
 * @param {array} arr - 要處理的陣列
 * @returns {array} - 移除後的陣列
 */
export function removeEveryOther(arr) {
  return arr.filter((value, index) => index % 2 === 0)
}
/**
 * Arguments to Binary addition
 * 二進制加法
 * @param {array} arr - 包含數字和其他元素的陣列
 * @returns {string} - 總和的二進制表示
 */
export function arr2bin(arr) {
  // if (arr.includes(NaN)) return 'NaN'
  // const total = arr.reduce((previousValue, currentValue) => {
  //   // @ts-ignore
  //   return previousValue + (Number.isInteger(currentValue) ? currentValue : 0)
  // }, 0)
  // return total.toString(2)

  // better
  const total = arr.reduce((previousValue, currentValue) => {
    // @ts-ignore
    return previousValue + (typeof currentValue === 'number' ? currentValue : 0)
  }, 0)
  return total.toString(2)
}
/**
 * UEFA EURO 2016
 * 歐洲國家盃 2016
 * @param {string[]} teams - 兩支球隊的名稱
 * @param {number[]} scores - 兩支球隊的得分
 * @returns {string} - 比賽結果字串
 */
export function uefaEuro2016(teams, scores) {
  const title = `At match ${teams[0]} - ${teams[1]}, `
  const max = Math.max(...scores)
  const min = Math.min(...scores)
  const winner = teams[scores.findIndex(n => n === max)]
  const result = max === min ? 'teams played draw.' : `${winner} won!`
  return title + result

  // or
  // const title = `At match ${teams[0]} - ${teams[1]}, `
  // const winner = scores[0] === scores[1] ? null : scores[0] > scores[1] ? teams[0] : teams[1]
  // const result = winner ? `${winner} won!` : 'teams played draw.'
  // return title + result
}
/**
 * pick a set of first elements
 * 選擇前 n 個元素
 * @param {array} arr - 要處理的序列
 * @param {number} n - 要返回的元素數量（預設值為 1）
 * @returns {array} - 第一個元素或前 n 個元素的序列
 */
export function first(arr, n = 1) {
  return arr.slice(0, n)
}
/**
 * Find the Difference in Age between Oldest and Youngest Family Members
 * 找到家庭成員最大和最小年齡的差異
 * @param {number[]} ages - 包含家庭成員年齡的陣列
 * @returns {number[]} - 包含最年輕年齡、最年長年齡和年齡差的陣列
 */
export function differenceInAges(ages) {
  const min = Math.min(...ages)
  const max = Math.max(...ages)
  return [min, max, max - min]
}
/**
 * Sum of positive
 * 計算陣列中所有正數的總和。
 * @param {number[]} arr - 輸入的數字陣列
 * @returns {number} - 所有正數的總和
 */
export function positiveSum(arr) {
  const positiveNumbers = arr.filter(n => n > 0)
  return positiveNumbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}
/**
 * Logical calculator
 * 根據指定的邏輯運算符計算陣列中的布林值。
 * @param {boolean[]} array - 包含布林值的陣列
 * @param {string} op - 邏輯運算符，可選值為 "AND", "OR", "XOR"
 * @returns {boolean} - 計算結果的布林值
 */
export function logicalCalc(array, op) {
  return array.reduce((previous, current) => {
    if (op === 'AND') return previous && current
    if (op === 'OR') return previous || current
    if (op === 'XOR') return previous !== current
  })

  // better
  // const ops = {
  //   AND: (a, b) => a && b,
  //   OR: (a, b) => a || b,
  //   XOR: (a, b) => a !== b,
  // }
  // return array.reduce(ops[op])
}
/**
 * Remove First and Last Character Part Two
 * 刪除輸入字串中的第一個和最後一個字元序列，並用空格分隔其餘序列。
 * @param {string} string - 包含以逗號分隔的字符序列的字串
 * @returns {string | null} - 新的字串，或如果輸入為空或只有一個序列則返回空值
 */
export function array(string) {
  const arrayList = string.split(',')
  if (arrayList.length < 3) return null
  return arrayList.slice(1, arrayList.length - 1).join(' ')

  // better
  // return arr.split(",").slice(1,-1).join(" ") || null;
}
/**
 * Array Madness
 * 判斷陣列 a 中每個元素的平方和是否大於陣列 b 中每個元素的立方和。
 * @param {number[]} a - 整數陣列 a
 * @param {number[]} b - 整數陣列 b
 * @returns {boolean} - 如果 a 中每個元素的平方和大於 b 中每個元素的立方和，則返回 true；否則返回 false。
 */
export function arrayMadness(a, b) {
  const sumA = a.map(n => n ** 2).reduce((previous, current) => previous + current)
  const sumB = b.map(n => n ** 3).reduce((previous, current) => previous + current)
  return sumA > sumB

  // better
  // const sumA = a.reduce((previous, current) => previous + current ** 2, 0)
  // const sumB = b.reduce((previous, current) => previous + current ** 3, 0)
  // return sumA > sumB
}
/**
 * How many stairs will Suzuki climb in 20 years?
 * 計算 20 年內可能爬的階梯數。
 * @param {number[][]} s - 包含整年爬樓梯記錄的陣列，每個元素都是一週的爬樓梯數字陣列。
 * @returns {number} - 20 年內可能爬的階梯數。
 */
export function stairsIn20(s) {
  return s.flat().reduce((previous, current) => previous + current) * 20
}
/**
 * Count the Monkeys!
 * 生成包含從 1 到指定數字的所有數字的陣列，但不包括 0。
 * @param {number} n - 指定的數字
 * @returns {number[]} - 包含從 1 到 n 的所有數字的陣列
 */
export function monkeyCount(n) {
  const countList = []
  for (let i = 1; i <= n; i++) {
    countList.push(i)
  }
  return countList

  // better
  // return [...Array(n)].map((item, index) => index + 1)
}
/**
 * Add Length
 * 給定一個字串，將每個單詞的長度新增到該單詞的末尾，並返回一個陣列。
 * @param {string} str - 輸入字串，其中單詞由空格分隔
 * @returns {string[]} - 包含每個單詞的長度添加到該單詞的末尾的陣列
 */
export function addLength(str) {
  return str.split(' ').map(s => `${s} ${s.length}`)
}
/**
 * Cascading Subsets
 * 返回大小為 n 的列表的級聯子集。
 * @param {number[]} array - 輸入列表
 * @param {number} n - 子集大小
 * @returns {number[][]} - 包含大小為 n 的子集的二維陣列
 */
export function eachCons(array, n) {
  if (n < 1 || n > array.length) return []
  const result = []
  for (let i = 0; i < array.length; i++) {
    const target = array.slice(i, n++)
    result.push(target)
    if (n > array.length) break
  }
  return result

  // better
  // if (n < 1 || n > array.length) return []
  // const result = []
  // for (let i = 0; i <= array.length - n; i++) {
  //   const target = array.slice(i, i + n)
  //   result.push(target)
  // }
  // return result

  // better
  // if (n < 1 || n > array.length) return []
  // let res = []
  // for (let i = 0; i < array.length; i++) {
  //   res.push(array.slice(i, i + n))
  // }
  // return res.filter(e => e.length === n)

  // best
  // if (n < 1 || n > array.length) return []
  // return array.map((x, y) => array.slice(y, y + n)).filter(x => x.length == n)
}
/**
 * Square(n) Sum
 * 將每個傳入的數字平方，然後將結果相加。
 * @param {number[]} numbers - 數字陣列
 * @returns {number} - 平方和
 */
export function squareSum(numbers) {
  return numbers.reduce((previous, current) => previous + current ** 2, 0)
}
/**
 * A Needle in the Haystack
 * 在給定的陣列中找到 "needle" 並返回相應的消息。
 * @param {string[]} haystack - 包含 "needle" 的陣列
 * @returns {string} - 包含 "found the needle at position X" 或 "needle not found" 的消息
 */
export function findNeedle(haystack) {
  const index = haystack.findIndex(s => s === 'needle')
  return index === -1 ? 'needle not found' : `found the needle at position ${index}`
}
/**
 * Get the mean of an array
 * 計算給定陣列的平均值，並將其四捨五入為最接近的整數。
 * @param {number[]} marks - 成績陣列
 * @returns {number} - 平均成績（無條件捨去）
 */
export function getAverage(marks) {
  const average = marks.reduce((a, b) => a + b) / marks.length
  return Math.floor(average)
}
/**
 * Find numbers which are divisible by given number
 * 返回所有可以被給定除數整除的數字。
 * @param {number[]} numbers - 數字陣列
 * @param {number} divisor - 除數
 * @returns {number[]} - 所有可以被除數整除的數字陣列
 */
export function divisibleBy(numbers, divisor) {
  return numbers.filter(n => n % divisor === 0)
}
/**
 * Convert number to reversed array of digits
 * 返回數字按相反順序排列在陣列中。
 * @param {number} n - 非負數
 * @returns {number[]} - 數字按相反順序排列的陣列
 */
export function digitize(n) {
  return n
    .toString()
    .split('')
    .map(s => +s)
    .reverse()

  // better
  // return n
  //   .toString()
  //   .split('')
  //   .map(Number)
  //   .reverse()

  // best
  // return Array.from(String(n), Number).reverse();
}
/**
 * Count by X
 * 返回前 n 個 x 的倍數的陣列。
 * @param {number} x - 基數
 * @param {number} n - 計數次數
 * @returns {number[]} - 陣列包含前 n 個 x 的倍數
 */
export function countBy(x, n) {
  return [...Array(n)].map((value, index) => x * (index + 1))

  // or
  // const result = []
  // for (let i = 1; i <= n; i++) {
  //   result.push(x * i)
  // }
  // return result
}
/**
 * Enumerable Magic #1 - True for All?
 * 根據給定的函數判斷序列中的所有元素是否都滿足條件。
 * @param {any[]} arr - 序列（陣列或其他結構）
 * @param {function} fun - 應用於每個元素的函數
 * @returns {boolean} - 如果所有元素都滿足條件，返回 true；否則返回 false
 */
export function all(arr, fun) {
  // @ts-ignore
  return arr.every(fun)
}
/**
 * Birthday II - Presents
 * 根據傳遞次數和禮物類型返回結果。
 * @param {string} x - 禮物類型（'goodpresent', 'crap', 'empty', 'bang', 'badpresent', 'dog'）
 * @param {number} y - 傳遞次數
 * @returns {string|number} - 結果字串或數字
 */
export function present(x, y) {
  if (x === 'goodpresent') {
    return Array.from(x, s => String.fromCharCode(s.charCodeAt(0) + y)).join('')
  }
  if (x === 'crap' || x === 'empty') {
    // @ts-ignore
    return [...x].sort().join('')
  }
  if (x === 'bang') {
    return Array.from(x, s => s.charCodeAt(0) - y).reduce((a, b) => a + b)
  }
  if (x === 'badpresent') {
    return 'Take this back!'
  }
  if (x === 'dog') {
    return `pass out from excitement ${y} times`
  }
}
/**
 * Holiday VII - Local Talk
 * 將句子中的單詞之間插入 'pak'。
 * @param {string} s - 輸入句子
 * @returns {string} - 轉換後的句子
 */
export function pak(s) {
  return s.trim().split(' ').join(' pak ')

  // better
  // return s.trim().replace(/ /g, ' pak ')
}
/**
 * Christmas baubles on the tree
 * 返回每個樹枝上的綵球陣列。
 * @param {number} baubles - 綵球數量
 * @param {number} branches - 樹枝數量
 * @returns {number[]|string} - 每個樹枝上的綵球陣列或提示資訊
 */
export function baublesOnTree(baubles, branches) {
  if (!branches) return 'Grandma, we will have to buy a Christmas tree first!'
  const tree = Array(branches).fill(0)
  for (let i = 0, balls = baubles; balls > 0; i++) {
    balls--
    tree[i % tree.length]++
  }
  return tree
}
/**
 * Fifa 17 Launch
 * 計算總獲獎金額。
 * @param {Object} ticket - 彩票對象，包含主場、客場和平局賭注
 * @param {string[]} results - 結果陣列，每個元素表示比分
 * @returns {string} - 帶有 £ 符號的總獲獎金額
 */
export function fifa(ticket, results) {
  const toNumber = value => {
    const regex = /^£(\d+)/
    return Number(regex.exec(value)[1])
  }
  const getResult = (a, b) => {
    if (a > b) return 'Home'
    if (a < b) return 'Away'
    if (a === b) return 'Draw'
  }
  const ticketList = Object.entries(ticket)
  const total = results.reduce((previous, current, index) => {
    const result = getResult(...current.split('-'))
    const [key, value] = ticketList[index]
    return key === result ? previous + toNumber(value) : previous
  }, 0)
  return `£${total}`
}
/**
 * Homogenous arrays
 * 返回一個新陣列，僅包含原始陣列中不為空且所有項類型相同的子陣列。
 * @param {Array[]} arrays - 二維陣列
 * @returns {Array[]} - 符合條件的子陣列組成的新陣列
 */
export function filterHomogenous(arrays) {
  return arrays.filter(array => {
    const result = array.every(item => typeof item === typeof array[0])
    return array.length && result
  })
}
/**
 * Noye's Fludde
 * 動物上船
 * @param {Array<string|number>} input - 包含動物名字或數字的陣列
 * @returns {Array<Array<string>>} - 排列好的動物成對陣列
 */
export function boatLoader(input) {
  const animals = input.reduce((previous, current) => {
    const obj = {}
    obj[current] = current in previous ? current : null
    return {
      ...previous,
      ...obj,
    }
  }, {})

  // 移除單數個的項目與數字
  for (let animal in animals) {
    if (!animals[animal] || Number.isInteger(animals[animal])) {
      delete animals[animal]
    }
  }

  // 按字母順序排列、大寫在小寫前面
  const result = Object.entries(animals).sort(([a], [b]) => {
    if (a.toUpperCase() !== b.toUpperCase()) {
      return a.toUpperCase().localeCompare(b.toUpperCase())
    }
    return a.localeCompare(b) * -1

    // better
    // return a.localeCompare(b, 'en-US-u-kf-upper')
  })

  return result
}
/**
 * Numbers to Objects
 * 數字轉物件
 * @param {number[]} s - 數字陣列
 * @returns {Object[]} - 包含數字與對應字串的物件陣列
 */
export function numObj(s) {
  return s.map(n => ({
    [n]: String.fromCharCode(n),
  }))
}
/**
 * Likes Vs Dislikes
 * 喜歡 vs. 不喜歡
 * @param {string[]} buttons - 按鈕輸入的陣列，包含 'Like'、'Dislike'
 * @returns {string} - 最終按鈕狀態，可能為 'Like'、'Dislike' 或 'Nothing'
 */
export function likeOrDislike(buttons) {
  return buttons.reduce((previous, current) => {
    return previous === current ? 'Nothing' : current
  }, 'Nothing')

  // or
  // let result = 'Nothing'
  // for (const button of buttons) {
  //   result = result === button ? 'Nothing' : button
  // }
  // return result
}
/**
 * Alan Partridge I - Partridge Watch
 * @param {string[]} x - 包含詞彙的字串陣列
 * @returns {string} - 返回相應的結果
 */
export function part(x) {
  const keywords = [
    'Partridge',
    'PearTree',
    'Chat',
    'Dan',
    'Toblerone',
    'Lynn',
    'AlphaPapa',
    'Nomad',
  ]
  const marks = x.reduce((previous, current) => {
    return previous + (keywords.includes(current) ? '!' : '')
  }, '')
  return marks ? `Mine's a Pint${marks}` : "Lynn, I've pierced my foot on a spike!!"

  // or
  // let arr = ['Partridge', 'PearTree', 'Chat', 'Dan', 'Toblerone', 'Lynn', 'AlphaPapa', 'Nomad']
  // let count = x.filter(item => arr.includes(item)).length
  // return count > 0
  //   ? "Mine's a Pint!" + '!'.repeat(count - 1)
  //   : "Lynn, I've pierced my foot on a spike!!"
}
/**
 * Slaphead
 * @param {string} x - 代表頭部狀態的字串，包含 "-" 和 "/"
 * @returns {string[]} - 包含替換後的頭部狀態和相應評價的陣列
 */
export function bald(x) {
  const comments = ['Clean!', 'Unicorn!', 'Homer!', 'Careless!', 'Careless!', 'Careless!', 'Hobo!']
  const total = x.match(/\//g)?.length ?? 0
  return ['-'.repeat(x.length), comments[total >= comments.length ? comments.length - 1 : total]]
}
/**
 * Sum of two lowest positive integers
 * 找出陣列中最小的兩個正整數的和
 * @param {number[]} numbers - 包含至少四個正整數的陣列
 * @returns {number} - 最小的兩個正整數的和
 */
export function sumTwoSmallestNumbers(numbers) {
  const [a, b] = [...numbers].sort((a, b) => a - b).slice(0, 2)
  return a + b

  // better
  // const [a, b] = [...numbers].sort((a, b) => a - b)
  // return a + b
}
/**
 * Birthday I - Cake
 * 生日 I - 蛋糕
 * @param {number} x - 蠟燭總數
 * @param {string} y - 用於計算蠟燭掉落數的字串
 * @returns {string} - 返回相應的結果，可能為 'Fire!' 或 'That was close!'
 */
export function cake(x, y) {
  const total = y.split('').reduce((previous, current, index) => {
    const charCode = current.charCodeAt(0)
    return previous + (index % 2 === 0 ? charCode : charCode - 96)
  }, 0)
  return total > x * 0.7 ? 'Fire!' : 'That was close!'
}
/**
 * Grid blast!
 * 根據給定的 x 和 y 坐標，返回對應的戰場區域
 * @param {number} x - x 坐標
 * @param {number} y - y 坐標
 * @returns {string} - 返回對應的戰場區域
 */
export function fire(x, y) {
  const areaX = ['left', 'middle', 'right'][x]
  const areaY = ['top', 'middle', 'bottom'][y]
  return areaX === areaY ? 'center' : `${areaY} ${areaX}`
}
/**
 * The Lazy Startup Office
 * 根據員工座位安排，返回垃圾桶清理輪值名單
 * @param {string[][]} arr - 二維陣列，代表員工座位安排
 * @returns {string[]} - 返回員工垃圾桶清理輪值名單
 */
export function binRota(arr) {
  return arr.reduce((previous, current, index) => {
    return previous.concat(index % 2 === 0 ? current : current.reverse())
  })
}
/**
 * Insert dashes
 * 在兩個奇數數字之間插入破折號('-')
 * @param {number} num - 非負整數
 * @returns {string} - 返回插入破折號後的字串
 */
export function insertDash(num) {
  const list = Array.from(num.toString())
  return list.reduce((previous, current, index) => {
    // @ts-ignore
    const hyphen = list[index - 1] % 2 === 1 && current % 2 === 1 ? '-' : ''
    return previous + hyphen + current
  })

  // better
  // return num.toString().replace(/[13579](?=[13579])/g, "$&-")
}
