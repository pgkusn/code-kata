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
