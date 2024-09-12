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

    // or
    // const j = numbers.indexOf(target - numbers[i])

    if (j !== -1 && j !== i) {
      return [i, j]
    }

    // better
    // const j = numbers.findLastIndex(n => target - n === numbers[i])
    // if (j !== -1) {
    //   return [i, j]
    // }
  }
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
  const numbers = [...Array(y)].fill(x)
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
