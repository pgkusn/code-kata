import _ from 'lodash/fp'
import * as R from 'ramda'

export function sortTheInnerContent(words: string): string {
  const sortWord = (word: string) => {
    if (word.length < 3) return word

    const sortedWord = R.pipe(
      R.slice(1, -1),
      R.sort((a: string, b: string) => b.localeCompare(a)),
      R.join('')
    )([...word])

    return R.head(word) + sortedWord + R.last(word)
  }

  return R.pipe(R.split(' '), R.map(sortWord), R.join(' '))(words)
}

export function grabscrab(anagram: string, dictionary: string[]): string[] {
  const sortString = (s: string) => {
    return R.pipe(
      R.split(''),
      R.sort((a, b) => a.localeCompare(b)),
      R.join('')
    )(s)
  }
  const sortedAnagram = sortString(anagram)

  return R.filter(x => sortString(x) === sortedAnagram, dictionary)
}

export function triangleType(a: number, b: number, c: number): number {
  const isTriangle = (a: number, b: number, c: number) => {
    return a + b > c && a + c > b && b + c > a
  }
  const isAcuteTriangle = (x: number, y: number, z: number) => {
    return z ** 2 < x ** 2 + y ** 2
  }
  const isRightTriangle = (x: number, y: number, z: number) => {
    return z ** 2 === x ** 2 + y ** 2
  }
  const isObtuseTriangle = (x: number, y: number, z: number) => {
    return z ** 2 > x ** 2 + y ** 2
  }

  if (!isTriangle(a, b, c)) return 0

  const [x, y, z] = [a, b, c].sort((a, b) => a - b)

  if (isAcuteTriangle(x, y, z)) return 1
  if (isRightTriangle(x, y, z)) return 2
  if (isObtuseTriangle(x, y, z)) return 3

  return 0
}

export const travel = (r: string, zipcode: string): string => {
  const regex = new RegExp(`^(\\d+)\\s(.+)\\s${zipcode}`)

  const formatAddress = (data: string[][]) => {
    const streetAndTown = R.pipe(R.map(R.last), R.join(','))(data)
    const houseNumber = R.pipe(R.map(R.head), R.join(','))(data)
    return `${streetAndTown}/${houseNumber}`
  }

  return R.pipe(
    R.split(','),
    R.filter(R.includes(zipcode)),
    R.map(R.pipe(R.match(regex), R.slice(1, 3)) as (a: string) => string[]),
    formatAddress,
    R.concat(`${zipcode}:`)
  )(r)
}

export function step(g: number, m: number, n: number): [number, number] | null {
  const isPrime = (n: number) => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
      if (n % i === 0) return false
    }
    return true
  }

  for (let i = m; i <= n - g; i++) {
    const next = i + g
    if (isPrime(i) && isPrime(next)) {
      return [i, next]
    }
  }
  return null
}

const getMonthlyValues = (town: string, s: string) => {
  const toObj = ([town, value]: string[]) => ({ town, value })

  const rainfallOfTown = R.pipe(
    R.split('\n'),
    R.map(R.pipe(R.split(':'), toObj)),
    R.find(R.propEq(town, 'town'))
  )(s) as { town: string; value: string }

  if (!rainfallOfTown) return

  return R.match(/\d+\.\d/g, rainfallOfTown.value)
}
export const mean = (town: string, s: string): number => {
  const monthlyValues = getMonthlyValues(town, s)

  if (!monthlyValues) return -1

  return R.pipe(R.map(Number), R.sum, R.divide(R.__, 12))(monthlyValues)
}
export const variance = (town: string, s: string): number => {
  const monthlyValues = getMonthlyValues(town, s)

  if (!monthlyValues) return -1

  const mean = R.pipe(R.map(Number), R.sum, R.divide(R.__, 12))(monthlyValues)
  return monthlyValues.reduce((prev, curr) => prev + Math.pow(+curr - mean, 2), 0) / 12
}

export function backwardsPrime(start: number, stop: number): number[] {
  const isPrime = (n: number) => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
      if (n % i === 0) return false
    }
    return true
  }
  const isPalindrome = (s: string) => R.reverse(s) === s

  const result = []
  for (let n = start; n <= stop; n++) {
    const isMatch = isPrime(n) && isPrime(+R.reverse(String(n))) && !isPalindrome(String(n))
    if (isMatch) result.push(n)
  }
  return result

  // better
  // const isMatch = (n: number) => {
  //   return isPrime(n) && isPrime(+R.reverse(String(n))) && !isPalindrome(String(n))
  // }
  // return R.range(start, stop + 1).filter(isMatch)
}

export function ipToInt32(ip: string): number {
  const reduce = (x: string[]) => {
    return x.reduce((prev, curr, index) => prev + +curr * Math.pow(2, 24 - 8 * index), 0)
  }
  return R.pipe(R.split('.'), reduce)(ip)
}

export function stringTransformer(str: string) {
  const transform = (x: string) => {
    return /[A-Z]/.test(x) ? x.toLowerCase() : x.toUpperCase()
    // another
    // return x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()
  }
  return R.pipe(R.replace(/[A-Za-z]/g, transform), R.split(' '), R.reverse, R.join(' '))(str)
}

export function nthFibo(n: number): number {
  const fibonacci: number[] = []

  for (let i = 0; i < n; i++) {
    const num = i > 1 ? fibonacci[i - 2] + fibonacci[i - 1] : i
    fibonacci.push(num)
  }

  return fibonacci.pop() || 0
}

export function longestRepetition(text: string): [string, number] {
  const [longest = ''] = R.pipe(
    R.match(/(.)\1*/g),
    R.sort((a, b) => b.length - a.length)
  )(text)

  return [longest && longest[0], longest.length]
}

export function nbMonths(
  startPriceOld: number,
  startPriceNew: number,
  savingPerMonth: number,
  percentLossByMonth: number
): number[] {
  let month = 0
  let saving = 0
  let balance = startPriceOld - startPriceNew

  if (startPriceOld >= startPriceNew) return [0, Math.round(balance)]

  while (balance < 0) {
    month++

    // 計算折舊
    percentLossByMonth += month % 2 === 0 ? 0.5 : 0
    startPriceOld *= 1 - percentLossByMonth / 100
    startPriceNew *= 1 - percentLossByMonth / 100

    saving += savingPerMonth
    balance = saving + startPriceOld - startPriceNew
  }

  return [month, Math.round(balance)]
}

export const stat = (s: string): string => {
  if (!s) return ''

  const toSeconds = ([h, m, s]: string[]) => +h * 3600 + +m * 60 + +s
  const secondsList = R.pipe(R.split(','), R.map(R.pipe(R.split('|'), toSeconds)))(s)

  const getRange = (items: number[]) => {
    const max = Math.max(...items)
    const min = Math.min(...items)
    return max - min
  }

  const getAverage = (items: number[]) => {
    return R.pipe(R.sum, n => n / items.length, Math.floor)(items)
  }

  const getMedian = (items: number[]) => {
    const sorted = items.toSorted((a, b) => a - b)
    if (sorted.length % 2 === 0) {
      return getAverage([sorted[sorted.length / 2], sorted[sorted.length / 2 - 1]])
    } else {
      return sorted[Math.floor(sorted.length / 2)]
    }
  }

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    const pad = (n: number) => String(n).padStart(2, '0')
    return `${pad(h)}|${pad(m)}|${pad(s)}`
  }

  return (
    `Range: ${R.pipe(getRange, formatTime)(secondsList)}` +
    ` Average: ${R.pipe(getAverage, formatTime)(secondsList)}` +
    ` Median: ${R.pipe(getMedian, formatTime)(secondsList)}`
  )
}

export function abbreviate(str: string): string {
  const regex = /\b\w{4,}\b/g
  return str.replace(regex, x => {
    const first = x[0]
    const last = x[x.length - 1]
    return `${first}${x.length - 2}${last}`
  })
}

export function pyramid(n: number): Array<Array<Number>> {
  const result = []
  for (let i = 1; i <= n; i++) {
    result.push(Array(i).fill(1))
  }
  return result

  // another
  // return Array.from({ length: n }, (_, i) => Array(i + 1).fill(1))
}

export function isValidIP(str: string): boolean {
  const validate = (ary: string[]) => {
    if (ary.length !== 4) return false
    return ary.every(s => /^(?!0\d)\d{1,3}$/.test(s) && +s <= 255)
  }
  return R.pipe(R.split('.'), validate)(str)
}

export function foldArray(array: number[], runs: number): number[] {
  const removeArray = (items: number[]) => {
    const spliced = [...items]
    const index = items.length % 2 === 0 ? items.length / 2 : (items.length + 1) / 2
    const removed = spliced.splice(index)
    return [removed, spliced]
  }

  const reverseArray = ([ary1, ary2]: number[][]) => {
    let a = [...ary1]
    let b = [...ary2]

    if (b.length < a.length) {
      b.reverse()
    } else {
      a.reverse()
    }

    return [a, b]
  }

  const mergeArray = ([a, b]: number[][]) => {
    return Array.from({ length: Math.max(a.length, b.length) }).reduce(
      (prev: number[], _, index) => {
        const n = a[index] || 0
        const m = b[index] || 0
        prev[index] = n + m
        return prev
      },
      []
    )
  }

  const merged = R.pipe(removeArray, reverseArray, mergeArray)(array)
  runs--

  if (runs > 0) {
    return foldArray(merged, runs)
  }

  return merged
}

export function splitAllEvenNumbers(numbers: number[], way: number): number[] {
  const getOddPairs = (even: number) => {
    const odds = []
    for (let n = 1; n < even; n += 2) {
      odds.push([n, even - n])
    }
    return odds
  }

  const getOddGroups = (even: number) => {
    const odds = []
    for (let n = 1; n < even; n += 2) {
      const m = even / n
      if (Number.isInteger(m)) {
        odds.push(Array(m).fill(n))
      }
    }
    return odds
  }

  const sortByAsc = (a: number, b: number) => a - b

  const sortByDiff = (a: number[], b: number[]) => {
    return Math.abs(a[0] - a[1]) - Math.abs(b[0] - b[1])
  }

  const getArrayItem = (index: number) => (arr: number[]) => arr.at(index)

  // 找最接近的兩個奇數
  const findClosestOdd = (even: number) => {
    return _.pipe(getOddPairs, R.sort(sortByDiff), getArrayItem(0))(even)
  }

  // 找最遠的兩個奇數
  const findFurthestOdd = (even: number) => {
    return _.pipe(getOddPairs, R.sort(sortByDiff), getArrayItem(-1), R.sort(sortByAsc))(even)
  }

  // 轉成相同的最大奇數
  const toSameMaxOdd = (even: number) => {
    return _.pipe(getOddGroups, getArrayItem(-1))(even)
  }

  // 全部變成1
  const toAllOne = (even: number) => {
    return _.pipe(getOddGroups, getArrayItem(0))(even)
  }

  const wayFn = [findClosestOdd, findFurthestOdd, toSameMaxOdd, toAllOne]
  return numbers.flatMap(n => (n % 2 === 0 ? wayFn[way](n) : n))
}

export const mirror = (obj: Record<string, any>): Record<string, string> => {
  const newObj: Record<string, string> = {}

  Object.keys(obj).forEach(key => {
    newObj[key] = R.reverse(key)
  })

  return newObj

  // better
  // return Object.keys(obj).reduce((o: Record<string, string>, k) => {
  //   o[k] = R.reverse(k)
  //   return o
  // }, {})
}

export function isHollow(x: number[]): boolean {
  const zeroIndex = x.findIndex(n => n === 0)
  const lastZeroIndex = x.findLastIndex(n => n === 0)

  const isValidNonZero = () => {
    const numberCount = x.slice(0, zeroIndex).length
    const lastNumberCount = x.slice(lastZeroIndex + 1).length
    return !!numberCount && numberCount === lastNumberCount
  }

  const isValidZero = () => {
    const numbers = x.slice(zeroIndex, lastZeroIndex + 1)
    const isCountMatch = numbers.length >= 3
    const isConsecutive = numbers.every(n => n === 0)
    return isCountMatch && isConsecutive
  }

  return isValidNonZero() && isValidZero()
}

export function gettingMad(array: number[]): number {
  const values: number[] = []
  array.forEach((a, i) => {
    array.forEach((b, j) => {
      if (i !== j) {
        values.push(Math.abs(a - b))
      }
    })
  })
  return Math.min(...values)
}

export function sortCsvColumns(csvFileContent: string): string {
  interface SortableItem {
    [key: number]: string
  }

  const toSortableItems = (arr: string[][]): SortableItem[] => {
    return Array.from({ length: arr[0].length }, (_, i) => {
      return arr.reduce((prev: { [key: number]: string }, _, index) => {
        prev[index] = arr[index][i]
        return prev
      }, {})
    })
  }

  const toValues = (arr: { [key: string]: string }) => Object.values(arr)

  const transpose = (arr: string[][]) => {
    const transposedArr: string[][] = []
    arr.forEach(row => {
      row.forEach((cell, columnIndex) => {
        if (!transposedArr[columnIndex]) {
          transposedArr[columnIndex] = []
        }
        transposedArr[columnIndex].push(cell)
      })
    })
    return transposedArr
  }

  const sortCsv = _.pipe(
    _.split('\n'),
    _.map(_.split(';')),
    toSortableItems,
    _.sortBy((o: SortableItem) => o[0].toLowerCase()),
    _.map(toValues),
    transpose,
    _.map(_.join(';')),
    _.join('\n')
  )

  return sortCsv(csvFileContent)
}

export function vowelBack(s: string): string {
  const move = (s: string) => {
    const getOffset = (s: string) => {
      if (['a', 'i', 'u'].includes(s)) return -5
      if (['c', 'o'].includes(s)) return -1
      if (s === 'd') return -3
      if (s === 'e') return -4
      return 9
    }
    const toCharCode = (offset: number) => (s: string) => s.charCodeAt(0) + offset
    const handleBoundary = (charCode: number) => {
      if (charCode < 'a'.charCodeAt(0)) {
        return charCode + 26
      }
      if (charCode > 'z'.charCodeAt(0)) {
        return charCode - 26
      }
      return charCode
    }
    const handleReset = (s: string) => (charCode: number) => {
      const chars = ['c', 'o', 'd', 'e']
      const char = String.fromCharCode(charCode)
      const originCharCode = s.charCodeAt(0)
      return chars.includes(char) ? originCharCode : charCode
    }
    const toChar = (n: number) => String.fromCharCode(n)

    const getMovedPosition = _.pipe(
      toCharCode(getOffset(s)),
      handleBoundary,
      handleReset(s),
      toChar
    )
    return getMovedPosition(s)
  }

  const transform = _.pipe(_.split(''), _.map(move), _.join(''))
  return transform(s)
}

export function wordsToHex(words: string): string[] {
  const toHexCharCode = (str: string) => str.charCodeAt(0).toString(16)
  const padEnd = (str: string) => str.padEnd(6, '0')
  const addHashTag = (str: string) => `#${str}`

  const toHex = _.pipe(
    _.split(' '),
    _.map(_.pipe(_.slice(0, 3), _.map(toHexCharCode), _.join(''), padEnd, addHashTag))
  )
  return toHex(words)
}

type RuleFunction = (a: number, b: number) => number

export function reduceByRules(numbers: number[], rules: RuleFunction[]): number {
  return numbers.reduce((prev, curr, index) => {
    const ruleFn = rules[(index - 1) % rules.length]
    return ruleFn(prev, curr)
  })
}

export function nextVersion(version: string): string {
  const increment = (str: string) => Number(str) + 1
  const toArray = (n: number) => [...`${n}`]
  const transform = (oldVersion: string) => (newVersion: string) => {
    if (newVersion.length !== oldVersion.length) {
      return newVersion.replace('.', '')
    }
    return newVersion
  }

  const getNextVersion = _.pipe(
    _.replace(/\./g, ''),
    increment,
    toArray,
    _.join('.'),
    transform(version)
  )
  return getNextVersion(version)
}

export function catMouse(x: string, j: number): string {
  const hasAllAnimals = ['C', 'm', 'D'].every(item => x.includes(item))
  if (!hasAllAnimals) return 'boring without all three'

  const findAnimal = (str: string) => (target: string) => {
    return [...str].findIndex(item => item === target)
  }

  const sliceBetween = (str: string) => {
    return ([a, b]: number[]) => {
      const start = Math.min(a, b)
      const end = Math.max(a, b)
      return str.slice(start, end)
    }
  }

  const getRoute = _.pipe(_.map(findAnimal(x)), sliceBetween(x))
  const route = getRoute(['C', 'm'])

  if (route.length - 1 > j) return 'Escaped!'
  if (route.includes('D')) return 'Protected!'

  return 'Caught!'
}

export function lastSurvivors(str: string): string {
  const getNextChar = (char: string) => {
    let charCode = char.charCodeAt(0) + 1

    if (charCode > 'z'.charCodeAt(0)) {
      charCode = 'a'.charCodeAt(0)
    }

    return String.fromCharCode(charCode)
  }

  const replaceBy = (source: string, target: string) => {
    const regex = new RegExp(`${target}{2}`, 'g')
    return source.replace(regex, getNextChar(target))
  }

  const sortAndReplaceStr = (str: string): string => {
    const sortedStr = [...str].sort().join('')

    if (str === sortedStr) return str

    let replacedStr = sortedStr

    for (const s of replacedStr) {
      replacedStr = replaceBy(replacedStr, s)
    }

    return sortAndReplaceStr(replacedStr)
  }

  return sortAndReplaceStr(str)
}

export function manhattanDistance(pointA: [number, number], pointB: [number, number]): number {
  const [x1, y1] = pointA
  const [x2, y2] = pointB

  const getDistance = (a: number, b: number) => Math.abs(a - b)

  return getDistance(x1, x2) + getDistance(y1, y2)
}

export const gcdi = (x: number, y: number): number => {
  x = Math.abs(x)
  y = Math.abs(y)

  const max = Math.max(x, y)

  for (let n = max; n > 0; n--) {
    if (x % n === 0 && y % n === 0) {
      return n
    }
  }
  return NaN
}
export const lcmu = (a: number, b: number): number => {
  a = Math.abs(a)
  b = Math.abs(b)

  const max = Math.max(a, b)

  for (let n = max; n > 0; n--) {
    if (a % n === 0 && b % n === 0) {
      return n * (a / n) * (b / n)
    }
  }
  return NaN
}
export const som = (a: number, b: number): number => {
  return a + b
}
export const maxi = (a: number, b: number): number => {
  return Math.max(a, b)
}
export const mini = (a: number, b: number): number => {
  return Math.min(a, b)
}
export const operArray = (
  fct: (a: number, b: number) => number,
  arr: number[],
  init: number
): number[] => {
  return arr.reduce((prev: number[], curr) => {
    const res = fct(prev.at(-1) ?? init, curr)
    prev.push(res)
    return prev
  }, [])
}

export function sortTwisted37(array: number[]): number[] {
  const toString = (n: number) => n.toString()
  const toNumber = (s: string) => Number(s)
  const replaceBy = (mapping: Record<string, string>) => (s: string) => {
    const keys = Object.keys(mapping).join('')
    const regex = new RegExp(`[${keys}]`, 'g')
    return s.replace(regex, x => (x in mapping ? mapping[x] : x))
  }

  const mapping = { '3': '7', '7': '3' }
  const twist = _.map(_.pipe(toString, replaceBy(mapping), toNumber))
  return _.pipe(twist, _.sortBy(_.identity), twist)(array)
}

export function fruit(reels: string[][], spins: number[]): number {
  interface Counts {
    [key: string]: number
  }
  interface Scoring {
    [key: string]: Counts
  }

  const scoring: Scoring = {
    Wild: { 3: 100, 2: 10 },
    Star: { 3: 90, 2: 9 },
    Bell: { 3: 80, 2: 8 },
    Shell: { 3: 70, 2: 7 },
    Seven: { 3: 60, 2: 6 },
    Cherry: { 3: 50, 2: 5 },
    Bar: { 3: 40, 2: 4 },
    King: { 3: 30, 2: 3 },
    Queen: { 3: 20, 2: 2 },
    Jack: { 3: 10, 2: 1 },
  }

  const getCounts = () => {
    const counts: Counts = {}

    for (let i = 0; i < spins.length; i++) {
      const reelIndex = spins[i]
      const reelItem = reels[i][reelIndex]

      if (counts[reelItem]) {
        counts[reelItem]++
      } else {
        counts[reelItem] = 1
      }
    }

    return counts
  }

  const getTotalScore = (counts: Counts) => {
    let totalScore = Object.keys(counts).reduce((prev, key) => {
      const score = scoring[key][counts[key]] ?? 0
      return prev + score
    }, 0)

    // double score
    if (Object.keys(counts).length === 2 && counts.Wild === 1) {
      totalScore *= 2
    }

    return totalScore
  }

  return getTotalScore(getCounts())
}

export const numPrimorial = (n: number) => {
  const isPrime = (n: number) => {
    // better:
    // for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    //   if (n % i === 0) return false
    // }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false
    }

    return true
  }

  const primeGenerator = function* () {
    let num = 2
    while (true) {
      if (isPrime(num)) {
        yield num
      }
      num++
    }
  }

  const generator = primeGenerator()
  const primes = Array.from({ length: n }, _ => generator.next().value)
  return primes.reduce((prev, curr) => prev * curr)
}

export function mazeRunner(maze: number[][], directions: string[]): string {
  const findStartPoint = (arr: number[][]) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === 2) {
          return [i, j]
        }
      }
    }
    return [0, 0]
  }

  let [y, x] = findStartPoint(maze)

  const moves = {
    N() {
      y -= 1
    },
    E() {
      x += 1
    },
    W() {
      x -= 1
    },
    S() {
      y += 1
    },
  }

  for (let i = 0; i < directions.length; i++) {
    const move = directions[i] as keyof typeof moves
    moves[move]()

    if (maze[y]?.[x] === undefined || maze[y][x] === 1) return 'Dead'
    if (maze[y][x] === 3) return 'Finish'
  }

  return 'Lost'
}

export function getLengthOfMissingArray(arrayOfArrays: any[] | null): number {
  if (!arrayOfArrays) return 0

  const numbers = arrayOfArrays.map(array => (array ? array.length : 0)).toSorted()

  for (let n = numbers[0], i = 0; n < numbers.at(-1); n++, i++) {
    if (!n) return 0
    if (n !== numbers[i]) return n
  }

  return 0
}

type matrix = number[][]
export function matrixAddition(a: matrix, b: matrix): matrix {
  return a.map((row, i) => row.map((value, j) => value + b[i][j]))
}

export function dashatize(num: number): string {
  num = Math.abs(num)

  return `${num}`.replace(/([13579])/g, '-$1-').replace(/^-|--|-$/g, x => {
    return x === '--' ? '-' : ''
  })
}

export function streetFighterSelection(
  fighters: string[][],
  position: number[],
  moves: ('down' | 'up' | 'right' | 'left')[]
) {
  let [x, y] = position

  const controls = {
    up() {
      x = 0
    },
    down() {
      x = 1
    },
    right() {
      y = y < 5 ? y + 1 : 0
    },
    left() {
      y = y > 0 ? y - 1 : 5
    },
  }

  return moves.reduce((prev: string[], curr) => {
    controls[curr]()
    prev.push(fighters[x][y])
    return prev
  }, [])
}

export function encode(string: string): string {
  const mapping = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  }
  return string.replace(/[aeiou]/g, x => mapping[x as keyof typeof mapping])
}

export function decode(string: string): string {
  const mapping = {
    '1': 'a',
    '2': 'e',
    '3': 'i',
    '4': 'o',
    '5': 'u',
  }
  return string.replace(/[1-5]/g, x => mapping[x as keyof typeof mapping])
}

export function thirt(n: number): number {
  const getValue = (num: number) => {
    const arr = [...num.toString()].toReversed()
    const value = arr.reduce((prev, curr, index) => {
      const res = (10 ** index % 13) * Number(curr)
      return prev + res
    }, 0)

    if (value === num) return value

    return getValue(value)
  }

  return getValue(n)
}

export function cleanString(str: string): string {
  let result = ''
  for (const s of str) {
    if (s === '#') {
      result = result.slice(0, -1)
    } else {
      result += s
    }
  }
  return result
}

export function solve(s: string) {
  // better:
  // const consonants = s.split(/[aeiou]/)
  const consonants = s.replace(/[aeiou]/g, ',').split(',')

  const getValue = (letter: string) => {
    return letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1
  }

  const values = consonants.map(item => {
    return [...item].reduce((prev, curr) => prev + getValue(curr), 0)
  })

  return Math.max(...values)
}

export function meeting(s: string): string {
  return s
    .toUpperCase()
    .split(';')
    .map(name => `(${name.replace(/(\w+):(\w+)/, '$2, $1')})`)
    .toSorted()
    .join('')
}

export function decipherThis(str: string): string {
  const decipherWord = (word: string) => {
    const [, x, y = ''] = word.match(/(\d+)(\w*)/) ?? []

    const arrY = [...y]
    const temp = arrY[0]
    arrY[0] = arrY[arrY.length - 1]
    arrY[arrY.length - 1] = temp

    return String.fromCharCode(+x) + arrY.join('')
  }

  return str && str.split(' ').map(decipherWord).join(' ')
}

export const encryptThis = (str: string): string => {
  const encryptWord = (word: string) => {
    const [first, ...rest] = [...word]

    const temp = rest[0]
    rest[0] = rest[rest.length - 1]
    rest[rest.length - 1] = temp

    return first.charCodeAt(0) + rest.join('')
  }

  return str && str.split(' ').map(encryptWord).join(' ')
}

export function validParentheses(parenStr: string): boolean {
  let count = 0
  for (const p of parenStr) {
    count += p === '(' ? 1 : -1
    if (count < 0) return false
  }
  return count === 0
}

export function revRot(s: string, sz: number): string {
  if (!s || sz <= 0 || s.length < sz) return ''

  const splitStr = (s: string): string[] => {
    return Array.from({ length: Math.ceil(s.length / sz) }, (_, i) => {
      const start = i * sz
      return s.slice(start, sz + start)
    })
  }

  const mapStr = (s: string): string => {
    if (s.length < sz) return ''

    if (sumStr(s) % 2 === 0) {
      return s.split('').reverse().join('')
    }

    return s.slice(1) + s[0]
  }

  const sumStr = (s: string): number => {
    return [...s].reduce((prev, curr) => prev + Number(curr), 0)
  }

  return splitStr(s).map(mapStr).join('')
}

export function partsSums(ls: number[]): number[] {
  const calculateSum = (numbers: number[]) => {
    return numbers.reduce((prev, curr) => prev + curr, 0)
  }

  const result = ls.map((_, index, array) => {
    const slicedList = array.slice(index)
    return calculateSum(slicedList)
  })

  result.push(0)

  return result

  // better
  // const totalSum = ls.reduce((acc, curr) => acc + curr, 0)
  // const result = [totalSum]

  // for (let i = 0; i < ls.length; i++) {
  //   result.push(result[i] - ls[i])
  // }

  // return result
}

export function multiplicationTable(size: number): number[][] {
  const rows = []

  for (let i = 1; i <= size; i++) {
    const row = []
    for (let j = 1; j <= size; j++) {
      row.push(i * j)
    }
    rows.push(row)
  }

  return rows
}

export function parse(data: string): number[] {
  let count = 0

  const command = {
    i() {
      count += 1
    },
    d() {
      count -= 1
    },
    s() {
      count *= count
    },
  }

  return [...data].reduce((prev: number[], curr) => {
    if (curr in command) {
      command[curr as keyof typeof command]()
    }

    if (curr === 'o') {
      prev.push(count)
    }

    return prev
  }, [])
}

export const sqInRect = (l: number, w: number): null | number[] => {
  if (l === w) return null

  const result: number[] = []

  const calc = (x: number, y: number) => {
    // 計算當前能夠切割出的最大的正方形邊長（取長度和寬度中的較小值）
    const min = Math.min(x, y)

    // 將該正方形的邊長新增到結果中
    result.push(min)

    // 根據哪一側剩餘空間更大，從那一側減去正方形的邊長
    const diff = Math.abs(x - y)

    // 繼續此過程，直到其中一側變為零
    if (x !== y) {
      calc(min, diff)
    }
  }

  calc(l, w)

  return result
}

export function diamond(n: number): string | null {
  if (n % 2 === 0 || n < 1) return null

  const printLine = (i: number) => {
    const chars = '*'.repeat(i)
    const spaces = ' '.repeat((n - i) / 2)
    return spaces + chars + '\n'
  }

  let result = ''
  for (let i = 1; i < n; i += 2) {
    result += printLine(i)
  }
  for (let i = n; i > 0; i -= 2) {
    result += printLine(i)
  }
  return result
}

export function toWeirdCase(string: string): string {
  const mapWord = (word: string) => {
    let result = ''
    for (let i = 0; i < word.length; i++) {
      const char = word[i]
      result += i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
    }
    return result
  }

  return string.split(' ').map(mapWord).join(' ')
}

export function encrypt(text: string | null, n: number) {
  if (!text) return text

  while (n > 0) {
    const even = []
    const odd = []

    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        even.push(text[i])
      } else {
        odd.push(text[i])
      }
    }

    text = [...odd, ...even].join('')

    n--
  }

  return text
}

export function decrypt(encryptedText: string | null, n: number) {
  if (!encryptedText) return encryptedText

  // 取前半部原字串的奇數索引，與後半部原字串的偶數索引，將兩者進行重組
  while (n > 0) {
    const oddEnd = Math.trunc(encryptedText.length / 2)
    const odd = encryptedText.slice(0, oddEnd)
    const even = encryptedText.slice(oddEnd)

    encryptedText = ''
    for (let i = 0; i < even.length; i++) {
      encryptedText += even[i]
      encryptedText += odd[i] ?? ''
    }

    n--
  }

  return encryptedText
}

export function camelCase(str: string): string {
  return str.replace(/\b\w/g, s => s.toUpperCase()).replace(/\s/g, '')
}

export function sumDigPow(a: number, b: number) {
  const sum = (n: number) => {
    return [...String(n)].reduce((prev, acc, index) => prev + Number(acc) ** (index + 1), 0)
  }

  const result = []
  for (let n = a; n <= b; n++) {
    if (n === sum(n)) {
      result.push(n)
    }
  }
  return result
}

export function twoSum(numbers: number[], target: number) {
  for (let i = 0; i < numbers.length; i++) {
    const j = numbers.findIndex(n => target - n === numbers[i])
    if (j !== -1 && j !== i) {
      return [i, j]
    }

    // or
    // const j = numbers.findLastIndex(n => target - n === numbers[i])
    // if (j !== -1) {
    //   return [i, j]
    // }
  }

  // better
  // const map = new Map()
  // for (let i = 0; i < numbers.length; i++) {
  //   const complement = target - numbers[i]
  //   if (map.has(complement)) {
  //     return [map.get(complement), i]
  //   }
  //   map.set(numbers[i], i)
  // }
  // return []
}

export function wave(str: string): Array<string> {
  return Array(str.length)
    .fill(str)
    .map((word, i) => {
      const chars = word.split('')
      chars[i] = chars[i].toUpperCase()
      return chars.join('')

      // better
      // return word.substr(0, i) + word[i].toUpperCase() + word.substr(i + 1)
    })
    .filter(item => item !== str)
}

export function queueTime(customers: number[], n: number): number {
  const counters = Array(n).fill(0)

  const getMinIndex = () => {
    const min = Math.min(...counters)
    return counters.findIndex(n => n === min)

    // better
    // return counters.indexOf(min)
  }

  for (const n of customers) {
    counters[getMinIndex()] += n
  }

  return Math.max(...counters)
}

export function inArray(a1: string[], a2: string[]): string[] {
  const matchedWords = a1.reduce((prev: string[], curr) => {
    const isMatch = a2.find(item => item.match(curr))
    if (isMatch) {
      prev.push(curr)
    }
    return prev
  }, [])

  // better
  // const matchedWords = a1.filter(substr => {
  //   const isMatch = a2.some(str => str.includes(substr))
  //   return isMatch
  // })

  return matchedWords.sort()
}

export function bouncingBall(h: number, bounce: number, window: number): number {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1

  let count = 0
  while (h > window) {
    count += 2
    h *= bounce
  }
  return count - 1
}

export function comp(a1: number[] | null, a2: number[] | null): boolean {
  if (!a1 || !a2) return false

  a1.sort((a, b) => a - b)
  a2.sort((a, b) => a - b)

  return a2.every((n, i) => n === a1[i] ** 2)
}

export function expandedForm(num: number): string {
  const numStr = String(num)
  const result = []
  for (let i = numStr.length - 1, j = 0; i >= 0; i--, j++) {
    const num = Number(numStr[i]) * 10 ** j
    if (num) {
      result.unshift(num)
    }
  }
  return result.join(' + ')

  // better
  // return [...String(num)]
  //   .reverse()
  //   .map((n, i) => Number(n) * 10 ** i)
  //   .filter(Boolean)
  //   .reverse()
  //   .join(' + ')
}

export function longestConsec(strarr: string[], k: number): string {
  const generateStringList = () => {
    const stringList = []
    for (let i = 0; i < strarr.length; i++) {
      const joinString = []
      for (let j = 0; j < k; j++) {
        joinString.push(strarr[i + j])
      }
      stringList.push(joinString.join(''))
    }
    return stringList
  }

  const findLongestString = (stringList: string[]) => {
    stringList.sort((a, b) => b.length - a.length)
    return stringList[0]
  }

  if (strarr.length === 0 || k > strarr.length || k <= 0) return ''

  const stringList = generateStringList()
  return findLongestString(stringList)
}

export function isPrime(num: number): boolean {
  if (num < 2) return false
  if (num === 2) return true
  if (num % 2 === 0) return false

  const sqrt = Math.sqrt(num)

  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return false
  }

  return true
}

export function validBraces(braces: string): boolean {
  const mapping: { [key: string]: string } = { ')': '(', ']': '[', '}': '{' }

  const stack = []
  for (const s of braces) {
    if (mapping[s] && mapping[s] === stack[stack.length - 1]) {
      stack.pop()
    } else {
      stack.push(s)
    }
  }

  return stack.length === 0
}

export function breakCamelCase(string: string): string {
  return string.replace(/[A-Z]/g, s => ` ${s}`)

  // better
  // return string.replace(/([A-Z])/g, ' $1')
}

export function countSmileys(arr: string[]): number {
  return arr.reduce((acc, cur) => {
    if (cur.match(/^[:;][-~]?[)D]$/)) return acc + 1
    return acc
  }, 0)
}

export function deleteNth(arr: number[], n: number) {
  return arr.reduce((acc: number[], cur) => {
    const count = acc.filter(n => n === cur).length
    if (count < n) acc.push(cur)
    return acc
  }, [])
}

export const towerBuilder = (nFloors: number): string[] => {
  // [                 字串長度  空白長度
  //   '     *     ',  1+0=1    11-1=10
  //   '    ***    ',  2+1=3    11-3=8
  //   '   *****   ',  3+2=5    11-5=6
  //   '  *******  ',  4+3=7    11-7=4
  //   ' ********* ',  5+4=9    11-9=2
  //   '***********',  6+5=11   11-11=0
  // ]

  const list: string[] = []

  // 產生字串
  for (let i = 1; i <= nFloors; i++) {
    let str = ''
    for (let j = 1; j <= i + i - 1; j++) {
      str += '*'
    }
    list.push(str)
  }

  // 產生前後空白
  return list.map(s => {
    const spaces = (list[list.length - 1].length - s.length) / 2

    s = s.padStart(s.length + spaces, ' ')
    s = s.padEnd(s.length + spaces, ' ')

    return s
  })
}

export function findMissingLetter(array: string[]): string {
  for (let i = 0; i < array.length - 1; i++) {
    const charCodeA = array[i].charCodeAt(0)
    const charCodeB = array[i + 1].charCodeAt(0)

    if (charCodeB - charCodeA !== 1) {
      return String.fromCharCode(charCodeB - 1)
    }
  }

  return ''
}

export function sortArray(array: number[]): (number | undefined)[] {
  const sortedOdds = array.filter(n => n % 2).sort((a, b) => a - b)
  return array.map(n => (n % 2 ? sortedOdds.shift() : n))
}

export function findUniq(arr: number[]): number | undefined {
  const counts = arr.reduce((acc: { [key: string]: number }, cur) => {
    if (!acc[cur]) acc[cur] = 0
    acc[cur]++
    return acc
  }, {})

  return arr.find(n => counts[n] === 1)

  // better
  // arr = arr.sort()
  // return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0]
}

export function splitStrings(str: string): string[] {
  const result = []

  for (let i = 0; i < str.length; i += 2) {
    const s1 = str[i]
    const s2 = str[i + 1] ?? '_'
    result.push(s1 + s2)
  }

  return result
}

export function findEvenIndex(arr: number[]): number {
  const sum = (num: number[]) => num.reduce((acc, cur) => acc + cur, 0)

  for (let i = 0; i < arr.length; i++) {
    const left = arr.slice(0, i)
    const right = arr.slice(i + 1)

    if (sum(left) === sum(right)) return i
  }

  return -1

  // better
  // return arr.findIndex((_, i, arr) => {
  //   const left = arr.slice(0, i)
  //   const right = arr.slice(i + 1)
  //   return sum(left) === sum(right)
  // })
}

export const digPow = (n: number, p: number): number => {
  const result = [...String(n)].reduce((acc, cur, index) => acc + Number(cur) ** (p + index), 0)
  return result % n === 0 ? result / n : -1
}

export const isPangram = (phrase: string): boolean => {
  const matched = phrase.match(/[A-Za-z]/g) ?? []
  const mapped = matched.map(s => s.toLocaleLowerCase())
  return [...new Set(mapped)].length === 26

  // better
  // const matched = phrase.toLocaleLowerCase().match(/[a-z]/g)
  // return new Set(matched).size === 26
}

export function uniqueInOrder(iterable: string | (string | number)[]): (string | number)[] {
  return [...iterable].reduce((acc: (string | number)[], cur, index, array) => {
    if (array[index - 1] !== cur) {
      acc.push(cur)
    }
    return acc
  }, [])

  // better
  // return [...iterable].filter((x, i) => x != iterable[i - 1])
}

export function tribonacci(ary: number[], n: number): number[] {
  if (n < 3) return ary.slice(0, n)

  while (ary.length < n) {
    const sum = ary[ary.length - 3] + ary[ary.length - 2] + ary[ary.length - 1]
    ary.push(sum)
  }

  return ary

  // better
  // for (let i = 0; ary.length < n; i++) {
  //   const sum = ary[i] + ary[i + 1] + ary[i + 2]
  //   ary.push(sum)
  // }
  // return ary.slice(0, n)
}

export function order(words: string): string {
  return words
    .split(' ')
    .sort((a, b) => {
      const [d1] = a.match(/\d/) ?? []
      const [d2] = b.match(/\d/) ?? []
      return Number(d1) - Number(d2)
    })
    .join(' ')
}

export function narcissistic(value: number): boolean {
  const result = [...String(value)].reduce((acc, cur, _, array) => {
    return acc + Math.pow(+cur, array.length)
  }, 0)
  return result === value
}

export function toCamelCase(str: string): string {
  return str.replace(/[_-][A-Za-z]/g, ([, s]) => s.toUpperCase())
}

export function persistence(num: number): number {
  let count = 0

  const multiply = (n: number): number => {
    const result = [...String(n)].reduce((acc, cur) => Number(acc) * Number(cur), 1)

    if (result !== n) {
      count++
      return multiply(result)
    } else {
      return count
    }
  }

  return multiply(num)

  // better
  // while (num > 9) {
  //   num = [...String(num)].reduce((acc, cur) => Number(acc) * Number(cur), 1)
  //   count++
  // }

  // return count
}

export function alphabetPosition(text: string): string {
  const alphabets = text.match(/([A-Za-z])/g) ?? []
  return alphabets.map(s => s.toLocaleLowerCase().charCodeAt(0) - 96).join(' ')
}

export function isValidWalk(walk: string[]) {
  const walkCount: { [key: string]: number } = { n: 0, s: 0, w: 0, e: 0 }
  walk.forEach(w => walkCount[w]++)

  return walk.length === 10 && walkCount.n - walkCount.s === 0 && walkCount.w - walkCount.e === 0
  // better
  // return walk.length === 10 && walkCount.n === walkCount.s && walkCount.w === walkCount.e
}

export function findOutlier(numbers: number[]): number {
  const oddNumbers = numbers.filter(n => n % 2 !== 0)
  const evenNumbers = numbers.filter(n => n % 2 === 0)
  return oddNumbers.length === 1 ? oddNumbers[0] : evenNumbers[0]
}

export function arrayDiff(a: number[], b: number[]): number[] {
  return a.filter(n => !b.includes(n))
}

export function digitalRoot(n: number): number {
  function sum(n: number): number {
    const numbers = [...`${n}`].map(s => Number(s))
    return numbers.reduce((prev, curr) => prev + curr)
  }

  while (n > 9) {
    n = sum(n)
  }
  return n
}

export function findOdd(numbers: number[]): number {
  const numberCount: { [key: string]: number } = {}

  for (const n of numbers) {
    if (!numberCount[n]) {
      numberCount[n] = 0
    }
    numberCount[n]++
  }

  const key = Object.keys(numberCount).find(n => numberCount[n] % 2 !== 0)
  return Number(key)
}

export function likes(names: string[]): string {
  const [name1, name2, ...others] = names

  switch (names.length) {
    case 0:
      return 'no one likes this'
    case 1:
      return `${name1} likes this`
    case 2:
      return `${name1} and ${name2} like this`
    case 3:
      return `${name1}, ${name2} and ${others[0]} like this`
    default:
      return `${name1}, ${name2} and ${others.length} others like this`
  }
}

export function spinWords(str: string): string {
  function reverseWord(word: string): string {
    return word.split('').reverse().join('')
  }
  return str.replace(/\w{5,}/g, word => reverseWord(word))
}

export function solution(num: number): number {
  const multiples = []
  for (let n = 0; n < num; n++) {
    if (n % 3 === 0 || n % 5 === 0) {
      multiples.push(n)
    }
  }
  return multiples.reduce((prev, curr) => prev + curr, 0)
}

export function onlyDuplicates(str: string): string {
  function getDuplicates(str: string): string[] {
    const charCount: { [key: string]: number } = {}

    for (const s of str) {
      if (!charCount[s]) {
        charCount[s] = 1
        continue
      }
      charCount[s]++
    }

    return Object.keys(charCount).filter(key => charCount[key] > 1)
  }

  const duplicates = getDuplicates(str)
  const regex = new RegExp(`[^${duplicates.join('')}]`, 'g')
  return str.replace(regex, '')
}

export function getCount(str: string): number {
  let vowelCount = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']

  for (const s of str) {
    if (vowels.includes(s)) {
      vowelCount++
    }
  }

  return vowelCount
}

export function minValue(values: number[]): number {
  const sortedValues = [...new Set(values)].sort().join('')
  return Number(sortedValues)
}

export function printerError(str: string): string {
  let errorCount = 0
  const maxCharCode = 'm'.charCodeAt(0)

  for (const s of str) {
    if (s.charCodeAt(0) > maxCharCode) {
      errorCount++
    }

    // better
    // if (s > 'm') {
    //   errorCount++
    // }
  }

  return `${errorCount}/${str.length}`
}

export function getRealFloor(n: number): number {
  if (n < 1) return n
  if (n > 13) return n - 2
  return n - 1
}

export function removeChar(str: string): string {
  return str.slice(1, -1)
}

export function abbrevName(name: string): string {
  return name
    .split(' ')
    .map(([s]) => s.toUpperCase())
    .join('.')
}

export function smallEnough(a: number[], limit: number): boolean {
  return a.every(item => item <= limit)
}

export function isPalindrome(x: string): boolean {
  const reversed = x.split('').reverse().join('')
  return reversed.toLowerCase() === x.toLowerCase()
}

export function updateLight(current: string): string {
  const lights = ['red', 'green', 'yellow']
  const currentIndex = lights.findIndex(item => item === current)
  return lights[(currentIndex + 1) % lights.length]
}

export function getMiddle(s: string) {
  if (s.length % 2 === 0) {
    const index = s.length / 2
    return s[index - 1] + s[index]
  } else {
    const index = Math.floor(s.length / 2)
    return s[index]
  }
}

export function noSpace(x: string): string {
  return x
    .split('')
    .filter(s => s.trim())
    .join('')
}

export function SeriesSum(n: number): string {
  const total = [...Array(n)].reduce((prev, curr, index) => {
    const base = index * 3 + 1
    return prev + 1 / base
  }, 0)
  return total.toFixed(2)
}

export function correct(s: string): string {
  return s.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I')
}

export function powersOfTwo(n: number): number[] {
  return [...Array(n + 1)].map((_, i) => Math.pow(2, i))
}

export function doubleChar(str: string): string {
  return str
    .split('')
    .map(s => s + s)
    .join('')
}

export function repeatStr(n: number, s: string): string {
  return s.repeat(n)
}

export function between(a: number, b: number): number[] {
  const ary: number[] = []
  for (let i = a; i <= b; i++) {
    ary.push(i)
  }
  return ary
}

export function power(x: number, y: number) {
  const numbers = Array(y).fill(x)
  return numbers.reduce((prev, curr) => prev * curr)
}

export function reverseSeq(n: number): number[] {
  const ary: number[] = []
  for (let i = n; i > 0; i--) {
    ary.push(i)
  }
  return ary
}

export function sakuraFall(v: number): number {
  return v > 0 ? 400 / v : 0
}

/**
 * Gravity Flip
 * 重力翻轉
 * @param {string} d
 * @param {number[]} a
 * @returns {number[]}
 */
export function flip(d: string, a: number[]): number[] {
  if (d === 'R') {
    return a.sort((a, b) => a - b)
  } else if (d === 'L') {
    return a.sort((a, b) => b - a)
  }
  return a
}

/**
 * A wolf in sheep's clothing
 * 狼穿著羊皮
 * @param {string[]} queue
 * @returns {string}
 */
export function warnTheSheep(queue: string[]): string {
  const ary = [...queue].reverse()
  const n = ary.findIndex(item => item === 'wolf')
  return n === 0
    ? 'Pls go away and stop eating my sheep'
    : `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`
}

/**
 * Total amount of points
 * 總分計算
 * @param {string[]} games
 * @returns {number}
 */
export function points(games: string[]): number {
  return games.reduce((previousValue, currentValue) => {
    const [x, y] = currentValue.split(':')
    if (x > y) return previousValue + 3
    if (x < y) return previousValue
    if (x === y) return previousValue + 1
    return previousValue
  }, 0)
}

/**
 * Sum of differences in array
 * 陣列差值總和
 * @param {number[]} arr
 * @returns {number}
 */
export function sumOfDifferences(arr: number[]): number {
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
export function multipleOfIndex(array: number[]): number[] {
  return array.filter((item, index) => (item === 0 ? true : item % index === 0))
}

/**
 * CSV representation of array
 * 陣列的 CSV 表示法
 * @param {number[][]} array
 * @returns {string}
 */
export function toCsvText(array: number[][]): string {
  return array.map(item => item.join()).join('\n')
}

/**
 * Array plus array
 * 陣列相加
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number}
 */
export function arrayPlusArray(arr1: number[], arr2: number[]): number {
  const arr = [...arr1, ...arr2]
  return arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}

/**
 * Find the first non-consecutive number
 * 找到第一個非連續數字
 * @param {number[]} arr
 * @returns {(number|null)}
 */
export function firstNonConsecutive(arr: number[]): number | null {
  return arr.find((n, i) => i && n - 1 !== arr[i - 1]) ?? null
}

/**
 * Find Multiples of a Number
 * 找到數字的倍數
 * @param {number} integer
 * @param {number} limit
 * @returns {number[]}
 */
export function findMultiples(integer: number, limit: number): number[] {
  const result: number[] = []
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
export function invert(array: number[]): number[] {
  return array.map(n => n * -1 || 0)
}

/**
 * Merge two sorted arrays into one
 * 將兩個排序好的陣列合併成一個
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
export function mergeArrays(arr1: number[], arr2: number[]): number[] {
  const setObj = new Set([...arr1, ...arr2])
  return Array.from(setObj).sort((a, b) => a - b)
}

/**
 * Duck Duck Goose
 * 鴨子、鴨子、鵝
 * @param {object[]} players
 * @param {number} goose
 */
export function duckDuckGoose(players: { name: string }[], goose: number): string {
  return players[(goose - 1) % players.length].name
}

/**
 * Beginner - Lost Without a Map
 * 基礎 - 一張地圖也不會丟
 * @param {number[]} x
 * @returns {number[]}
 */
export function maps(x: number[]): number[] {
  return x.map(n => n * 2)
}

/**
 * Beginner - Reduce but Grow
 * 基礎 - 縮減但成長
 * @param {number[]} x
 * @returns {number}
 */
export function grow(x: number[]): number {
  return x.reduce((previousValue, currentValue, currentIndex) => {
    if (currentIndex === 0) return previousValue
    return previousValue * currentValue
  }, x[0])
}

/**
 * To square(root) or not to square(root)
 * 要平方根還是不要平方根
 * @param {number[]} array
 * @returns {number[]}
 */
export function squareOrSquareRoot(array: number[]): number[] {
  return array.map(n => (Number.isInteger(Math.sqrt(n)) ? Math.sqrt(n) : n ** 2))
}

/**
 * I love you, a little , a lot, passionately ... not at all
 * 我愛你，一點點，很多，熱情...一點也不
 * @param {number} nbPetals
 * @returns {string}
 */
export function howMuchILoveYou(nbPetals: number): string {
  const phrases = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all']
  return phrases[(nbPetals - 1) % phrases.length]
}

/**
 * Well of Ideas - Easy Version
 * 點子之井 - 簡易版
 * @param {string[]} x
 * @returns {string}
 */
export function well(x: string[]): string {
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
export function gooseFilter(birds: string[]): string[] {
  var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher']
  return birds.filter(item => !geese.includes(item))
}

/**
 * Sum Mixed Array
 * 求和混合陣列
 * @param {(string | number)[]} x
 * @returns {number}
 */
export function sumMix(x: (string | number)[]): number {
  return x.reduce((previousValue: number, currentValue) => {
    return previousValue + Number(currentValue)
  }, 0)
}

/**
 * Fake Binary
 * 假二進制
 * @param {string} x
 * @returns {string}
 */
export function fakeBin(x: string): string {
  return x
    .split('')
    .map(n => (+n < 5 ? '0' : '1'))
    .join('')
}

/**
 * Convert a string to an array
 * 將字串轉為陣列
 * @param {string} string
 * @returns {string[]}
 */
export function stringToArray(string: string): string[] {
  return string.split(' ')
}

/**
 * Is there a vowel in there?
 * 是否有元音字母？
 * @param {number[]} a
 * @returns {(number|string)[]}
 */
export function isVow(a: number[]): (number | string)[] {
  const vowels = ['a', 'e', 'i', 'o', 'u']
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
export function twoSort(s: string[]): string {
  const sortedArray = [...s].sort()
  return sortedArray[0].split('').join('***')
}

/**
 * Calculate average
 * 計算平均值
 * @param {number[]} array
 * @returns {number}
 */
export function findAverage(array: number[]): number {
  const total = array.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
  return total / array.length || 0
}

/**
 * Count of positives / sum of negatives
 * 正數個數 / 負數總和
 * @param {number[]} input
 * @returns {number[]}
 */
export function countPositivesSumNegatives(input: number[] | null): number[] {
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
export function removeEveryOther<T>(arr: T[]): T[] {
  return arr.filter((value, index) => index % 2 === 0)
}

/**
 * Arguments to Binary addition
 * 二進制加法
 * @param {array} arr - 包含數字和其他元素的陣列
 * @returns {string} - 總和的二進制表示
 */
export function arr2bin(arr: any[]): string {
  if (arr.includes(NaN)) return 'NaN'
  const total = arr.reduce((previousValue, currentValue) => {
    return previousValue + (Number.isInteger(currentValue) ? currentValue : 0)
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
export function uefaEuro2016(teams: string[], scores: number[]): string {
  const title = `At match ${teams[0]} - ${teams[1]}, `
  const max = Math.max(...scores)
  const min = Math.min(...scores)
  const winner = teams[scores.findIndex(n => n === max)]
  const result = max === min ? 'teams played draw.' : `${winner} won!`
  return title + result
}

/**
 * pick a set of first elements
 * 選擇前 n 個元素
 * @param {array} arr - 要處理的序列
 * @param {number} n - 要返回的元素數量（預設值為 1）
 * @returns {array} - 第一個元素或前 n 個元素的序列
 */
export function first<T>(arr: T[], n: number = 1): T[] {
  return arr.slice(0, n)
}

/**
 * Find the Difference in Age between Oldest and Youngest Family Members
 * 找到家庭成員最大和最小年齡的差異
 * @param {number[]} ages - 包含家庭成員年齡的陣列
 * @returns {number[]} - 包含最年輕年齡、最年長年齡和年齡差的陣列
 */
export function differenceInAges(ages: number[]): number[] {
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
export function positiveSum(arr: number[]): number {
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
export function logicalCalc(array: boolean[], op: string): boolean {
  return array.reduce((previous, current) => {
    if (op === 'AND') return previous && current
    if (op === 'OR') return previous || current
    if (op === 'XOR') return previous !== current
    return previous
  })
}

/**
 * Remove First and Last Character Part Two
 * 刪除輸入字串中的第一個和最後一個字元序列，並用空格分隔其餘序列。
 * @param {string} string - 包含以逗號分隔的字符序列的字串
 * @returns {string | null} - 新的字串，或如果輸入為空或只有一個序列則返回空值
 */
export function array(string: string): string | null {
  const arrayList = string.split(',')
  if (arrayList.length < 3) return null
  return arrayList.slice(1, arrayList.length - 1).join(' ')
}

/**
 * Array Madness
 * 判斷陣列 a 中每個元素的平方和是否大於陣列 b 中每個元素的立方和。
 * @param {number[]} a - 整數陣列 a
 * @param {number[]} b - 整數陣列 b
 * @returns {boolean} - 如果 a 中每個元素的平方和大於 b 中每個元素的立方和，則返回 true；否則返回 false。
 */
export function arrayMadness(a: number[], b: number[]): boolean {
  const sumA = a.map(n => n ** 2).reduce((previous, current) => previous + current)
  const sumB = b.map(n => n ** 3).reduce((previous, current) => previous + current)
  return sumA > sumB
}

/**
 * How many stairs will Suzuki climb in 20 years?
 * 計算 20 年內可能爬的階梯數。
 * @param {number[][]} s - 包含整年爬樓梯記錄的陣列，每個元素都是一週的爬樓梯數字陣列。
 * @returns {number} - 20 年內可能爬的階梯數。
 */
export function stairsIn20(s: number[][]): number {
  return s.flat().reduce((previous, current) => previous + current) * 20
}

/**
 * Count the Monkeys!
 * 生成包含從 1 到指定數字的所有數字的陣列，但不包括 0。
 * @param {number} n - 指定的數字
 * @returns {number[]} - 包含從 1 到 n 的所有數字的陣列
 */
export function monkeyCount(n: number): number[] {
  const countList: number[] = []
  for (let i = 1; i <= n; i++) {
    countList.push(i)
  }
  return countList
}

/**
 * Add Length
 * 給定一個字串，將每個單詞的長度新增到該單詞的末尾，並返回一個陣列。
 * @param {string} str - 輸入字串，其中單詞由空格分隔
 * @returns {string[]} - 包含每個單詞的長度添加到該單詞的末尾的陣列
 */
export function addLength(str: string): string[] {
  return str.split(' ').map(s => `${s} ${s.length}`)
}

/**
 * Cascading Subsets
 * 返回大小為 n 的列表的級聯子集。
 * @param {number[]} array - 輸入列表
 * @param {number} n - 子集大小
 * @returns {number[][]} - 包含大小為 n 的子集的二維陣列
 */
export function eachCons(array: number[], n: number): number[][] {
  if (n < 1 || n > array.length) return []
  const result: number[][] = []
  for (let i = 0; i <= array.length - n; i++) {
    const target = array.slice(i, i + n)
    result.push(target)
  }
  return result
}

/**
 * Square(n) Sum
 * 將每個傳入的數字平方，然後將結果相加。
 * @param {number[]} numbers - 數字陣列
 * @returns {number} - 平方和
 */
export function squareSum(numbers: number[]): number {
  return numbers.reduce((previous, current) => previous + current ** 2, 0)
}

/**
 * A Needle in the Haystack
 * 在給定的陣列中找到 "needle" 並返回相應的消息。
 * @param {string[]} haystack - 包含 "needle" 的陣列
 * @returns {string} - 包含 "found the needle at position X" 或 "needle not found" 的消息
 */
export function findNeedle(haystack: string[]): string {
  const index = haystack.findIndex(s => s === 'needle')
  return index === -1 ? 'needle not found' : `found the needle at position ${index}`
}

/**
 * Get the mean of an array
 * 計算給定陣列的平均值，並將其四捨五入為最接近的整數。
 * @param {number[]} marks - 成績陣��
 * @returns {number} - 平均成績（無條件捨去）
 */
export function getAverage(marks: number[]): number {
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
export function divisibleBy(numbers: number[], divisor: number): number[] {
  return numbers.filter(n => n % divisor === 0)
}

/**
 * Convert number to reversed array of digits
 * 返回數字按相反順序排列在陣列中。
 * @param {number} n - 非負數
 * @returns {number[]} - 數字按相反順序排列的陣列
 */
export function digitize(n: number): number[] {
  return Array.from(String(n), Number).reverse()
}

/**
 * Count by X
 * 返回前 n 個 x 的倍數的陣列。
 * @param {number} x - 基數
 * @param {number} n - 計數次數
 * @returns {number[]} - 陣列包含前 n 個 x 的倍數
 */
export function countBy(x: number, n: number): number[] {
  return [...Array(n)].map((_, index) => x * (index + 1))
}

/**
 * Enumerable Magic #1 - True for All?
 * 根據給定的函數判斷序列中的所有元素是否都滿足條件。
 * @param {T[]} arr - 序列（陣列或其他結構）
 * @param {(item: T) => boolean} fun - 應用於每個元素的函數
 * @returns {boolean} - 如果所有元素都滿足條件，返回 true；否則返回 false
 */
export function all<T>(arr: T[], fun: (item: T) => boolean): boolean {
  return arr.every(fun)
}

/**
 * Birthday II - Presents
 * 根據傳遞次數和禮物類型返回結果。
 * @param {string} x - 禮物類型（'goodpresent', 'crap', 'empty', 'bang', 'badpresent', 'dog'）
 * @param {number} y - 傳遞次數
 * @returns {string|number} - 結果字串或數字
 */
export function present(x: string, y: number): string | number {
  if (x === 'goodpresent') {
    return Array.from(x, s => String.fromCharCode(s.charCodeAt(0) + y)).join('')
  }
  if (x === 'crap' || x === 'empty') {
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
  return ''
}

/**
 * Holiday VII - Local Talk
 * 將句子中的單詞之間插入 'pak'。
 * @param {string} s - 輸入句子
 * @returns {string} - 轉換後的句子
 */
export function pak(s: string): string {
  return s.trim().replace(/ /g, ' pak ')
}

/**
 * Christmas baubles on the tree
 * 返回每個樹枝上的綵球陣列。
 * @param {number} baubles - 綵球數量
 * @param {number} branches - 樹枝數量
 * @returns {number[]|string} - 每個樹枝上的綵球陣列或提示資訊
 */
export function baublesOnTree(baubles: number, branches: number): number[] | string {
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
 * @param {Record<string, string>} ticket - 彩票對象，包含主場、客場和平局賭注
 * @param {string[]} results - 結果陣列，每個元素表示比分
 * @returns {string} - 帶有 £ 符號的總獲獎金額
 */
export function fifa(ticket: Record<string, string>, results: string[]): string {
  const toNumber = (value: string): number => {
    const regex = /^£(\d+)/
    const match = regex.exec(value)
    return match ? Number(match[1]) : 0
  }
  const getResult = (a: number, b: number): string => {
    if (a > b) return 'Home'
    if (a < b) return 'Away'
    if (a === b) return 'Draw'
    return ''
  }
  const ticketList = Object.entries(ticket)
  const total = results.reduce((previous, current, index) => {
    const [a, b] = current.split('-').map(Number)
    const result = getResult(a, b)
    const [key, value] = ticketList[index]
    return key === result ? previous + toNumber(value) : previous
  }, 0)
  return `£${total}`
}

/**
 * Homogenous arrays
 * 返回一個新陣列，僅包含原始陣列中不為空且所有項類型相同的子陣列。
 * @param {any[][]} arrays - 二維陣列
 * @returns {any[][]} - 符合條件的子陣列組成的新陣列
 */
export function filterHomogenous(arrays: any[][]): any[][] {
  return arrays.filter(array => {
    const result = array.every(item => typeof item === typeof array[0])
    return array.length && result
  })
}

/**
 * Noye's Fludde
 * 動物上船
 * @param {(string|number)[]} input - 包含動物名字或數字的陣列
 * @returns {[string, string][]} - 排列好的動物成對陣列
 */
export function boatLoader(input: (string | number)[]): [string, string][] {
  const animals: Record<string, string | null> = input.reduce((previous, current) => {
    const obj: Record<string, string | null> = {}
    obj[current.toString()] = current.toString() in previous ? current.toString() : null
    return {
      ...previous,
      ...obj,
    }
  }, {} as Record<string, string | null>)

  // 移除單數個的項目與數字
  for (let animal in animals) {
    if (!animals[animal] || !isNaN(Number(animals[animal]))) {
      delete animals[animal]
    }
  }

  // 按字母順序排列、大寫在小寫前面
  const result = Object.entries(animals).sort(([a], [b]) => {
    return a.localeCompare(b, 'en-US-u-kf-upper')
  })

  return result as [string, string][]
}

/**
 * Numbers to Objects
 * 數字轉物件
 * @param {number[]} s - 數字陣列
 * @returns {Record<number, string>[]} - 包含數字與對應字串的物件陣列
 */
export function numObj(s: number[]): Record<number, string>[] {
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
export function likeOrDislike(buttons: string[]): string {
  return buttons.reduce((previous, current) => {
    return previous === current ? 'Nothing' : current
  }, 'Nothing')
}

/**
 * Alan Partridge I - Partridge Watch
 * @param {string[]} x - 包含詞彙的字串陣列
 * @returns {string} - 返回相應的結果
 */
export function part(x: string[]): string {
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
}

/**
 * Slaphead
 * @param {string} x - 代表頭部狀態的字串，包含 "-" 和 "/"
 * @returns {[string, string]} - 包含替換後的頭部狀態和相應評價的陣列
 */
export function bald(x: string): [string, string] {
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
export function sumTwoSmallestNumbers(numbers: number[]): number {
  const [a, b] = [...numbers].sort((a, b) => a - b)
  return a + b
}

/**
 * Birthday I - Cake
 * 生日 I - 蛋糕
 * @param {number} x - 蠟燭總數
 * @param {string} y - 用於計算蠟燭掉落數的字串
 * @returns {string} - 返回相應的結果，可能為 'Fire!' 或 'That was close!'
 */
export function cake(x: number, y: string): string {
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
export function fire(x: number, y: number): string {
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
export function binRota(arr: string[][]): string[] {
  return arr.reduce((previous, current, index) => {
    return previous.concat(index % 2 === 0 ? current : current.reverse())
  }, [] as string[])
}

/**
 * Insert dashes
 * 在兩個奇數數字之間插入破折號('-')
 * @param {number} num - 非負整數
 * @returns {string} - 返回插入破折號後的字串
 */
export function insertDash(num: number): string {
  return num.toString().replace(/[13579](?=[13579])/g, '$&-')
}

/**
 * Tetris Series #1 — Scoring System
 * 使用原始的任天堂計分系統計算遊戲的最終得分
 * @param {number[]} arr - 包含清理過的行數的陣列
 * @returns {number} 計算出的最終得分
 */
export function getScore(arr: number[]): number {
  let level = 0
  let lines = 0

  const getPoint = (line: number, level: number): number => {
    const basePoints = [0, 40, 100, 300, 1200]
    return basePoints[line] * (level + 1)
  }

  return arr.reduce((previous, current) => {
    level = Math.trunc(lines / 10)
    lines += current
    return (previous += getPoint(current, level))
  }, 0)
}

/**
 * Mysterious Singularity Numbers
 * 找出不超過 N 且不被 2、3、5 中的任何一個數整除的自然數的數量。
 * @param {number} n - 自然數 N
 * @returns {number} 不符合條件的自然數數量
 */
export function realNumbers(n: number): number {
  let total = 0
  const list = [2, 3, 5]

  for (let m = 1; m <= n; m++) {
    if (list.every(x => m % x !== 0)) total++
  }

  return total
}

/**
 * Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
 * 檢查開發者列表中的所有開發者是否使用相同的程式語言
 * @param {Array<{ language: string }>} list - 包含開發者資訊的物件陣列
 * @returns {boolean} 若所有開發者使用相同程式語言則回傳 true，否則回傳 false
 */
export function isSameLanguage(list: Array<{ language: string }>): boolean {
  return list.every(item => item.language === list[0].language)
}

/**
 * How fast can the burglar steal all the diamonds?
 * 計算並返回一個整數，表示竊賊從保險箱中拿取所有鑽石所需的最小重複次數。
 * @param {string[]} locker - 一個包含字符串的陣列，表示單個保險箱
 * @returns {number} 最小重複次數
 */
export function diamondBurglar(locker: string[]): number {
  return (locker.join('.').match(/\*{1,2}/g) || []).length
}

/**
 * Quadrants
 * 根據給定的 x 和 y 座標，確定該點所在的象限
 * @param {number} x - x 座標
 * @param {number} y - y 座標
 * @returns {number} 1、2、3 或 4，表示該點所在的象限
 */
export function quadrant(x: number, y: number): number {
  if (x > 0 && y > 0) return 1
  if (x < 0 && y > 0) return 2
  if (x < 0 && y < 0) return 3
  if (x > 0 && y < 0) return 4
  return 0 // 當點在座標軸上時
}

/**
 * Check same case
 * 檢查兩個給定的字符是否相同大小寫
 * @param {string} a - 字符 a
 * @param {string} b - 字符 b
 * @returns {number} 如果其中一個字符不是字母，返回 -1；如果兩個字符是相同大小寫，返回 1；如果兩個字符都是字母，但大小寫不同，返回 0
 */
export function sameCase(a: string, b: string): number {
  if (/[^A-Za-z]/.test(a + b)) return -1
  if (/^[A-Z]+$|^[a-z]+$/.test(a + b)) return 1
  return 0
}

/**
 * Quarter of the year
 * 給定一個介於 1 到 12 之間的整數代表月份，返回它屬於哪一年的哪個季度（用一個整數表示）。
 * @param {number} month - 月份（介於 1 到 12 之間的整數）
 * @returns {number} 季度（用整數表示）
 */
export const quarterOf = (month: number): number => {
  return Math.ceil(month / 3)
}

/**
 * Closest elevator
 * 根據兩台電梯目前所在樓層及呼叫樓層，返回離呼叫樓層較近的電梯的名稱。
 * @param {number} left - 左側電梯目前所在樓層
 * @param {number} right - 右側電梯目前所在樓層
 * @param {number} call - 呼叫電梯的樓層
 * @returns {string} 電梯的名稱 ("left" 或 "right")
 */
export function elevator(left: number, right: number, call: number): string {
  const leftDistance = Math.abs(call - left)
  const rightDistance = Math.abs(call - right)
  return leftDistance < rightDistance ? 'left' : 'right'
}

/**
 * Pillars
 * Calculate the distance between the first and the last pillar in centimeters
 * (without the width of the first and last pillar).
 * @param {number} numPill - Number of pillars (≥ 1)
 * @param {number} dist - Distance between pillars (10 - 30 meters)
 * @param {number} width - Width of the pillar (10 - 50 centimeters)
 * @returns {number} Distance between the first and last pillar in centimeters
 */
export function pillars(numPill: number, dist: number, width: number): number {
  if (numPill === 1) return 0
  return dist * 100 * (numPill - 1) + width * (numPill - 2)
}

/**
 * Twice as old
 * 計算多少年前，父親的年齡是他的兒子的兩倍，或多少年後父親的年齡將是他的兒子的兩倍。
 * @param {number} dadYearsOld - 父親目前的年齡（以年為單位）
 * @param {number} sonYearsOld - 兒子目前的年齡（以年為單位）
 * @returns {number} 多少年前或多少年後
 */
export function twiceAsOld(dadYearsOld: number, sonYearsOld: number): number {
  return Math.abs(dadYearsOld - 2 * sonYearsOld)
}

/**
 * Flick Switch
 * 在給定的字符串陣列中，找出是否包含 "flick"，如果包含則切換對應元素的布爾值。
 * @param {string[]} arr - 字符串陣列
 * @returns {boolean[]} - 切換後的布爾值陣列
 */
export function flickSwitch(arr: string[]): boolean[] {
  let a = true
  return arr.map(b => (b === 'flick' ? (a = !a) : a))
}

/**
 * Draw stairs
 * 根據給定的數字 n，用字母 "I" 畫出 n 層高、n 層寬的樓梯，最高的樓梯在左上角。
 * @param {number} n - 樓梯的層數
 * @returns {string} - 用字母 "I" 畫出的樓梯
 */
export function drawStairs(n: number): string {
  return [...Array(n)].map((_, i) => ' '.repeat(i) + 'I').join('\n')
}

/**
 * The Feast of Many Beasts
 * 判斷動物是否可以帶指定的菜參加盛宴。
 * @param {string} beast - 動物的名字
 * @param {string} dish - 菜的名字
 * @returns {boolean} - 如果動物可以帶這道菜，則返回 true；否則返回 false。
 */
export function feast(beast: string, dish: string): boolean {
  return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}

/**
 * Find Nearest square number
 * 找到正整數 n 的最近平方數。
 * @param {number} n - 正整數 n
 * @returns {number} - 最近的平方數
 */
export function nearestSq(n: number): number {
  return Math.pow(Math.round(Math.sqrt(n)), 2)
}

/**
 * Cat years, Dog years
 * 回傳人年、貓年、狗年的年齡
 * @param {number} humanYears - 人年
 * @returns {[number, number, number]} - [人年, 貓年, 狗年]
 */
export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
  const catYears = humanYears === 1 ? 15 : humanYears === 2 ? 24 : 24 + (humanYears - 2) * 4
  const dogYears = humanYears === 1 ? 15 : humanYears === 2 ? 24 : 24 + (humanYears - 2) * 5
  return [humanYears, catYears, dogYears]
}

/**
 * Multiplication table for number
 * 回傳指定數字的乘法表
 * @param {number} number - 介於 1 到 10 之間的整數
 * @returns {string} - 乘法表字串
 */
export function multiTable(number: number): string {
  return [...Array(10)].map((_, i) => `${i + 1} * ${number} = ${(i + 1) * number}`).join('\n')
}
