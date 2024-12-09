export function uniqueMorseRepresentations(words: string[]): number {
  const morseCodes = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..',
  ]

  const transformLetter = (letter: string) => {
    const index = letter.charCodeAt(0) - 'a'.charCodeAt(0)
    return morseCodes[index]
  }

  const transformedWords = words.map(word => {
    return [...word].map(transformLetter).join('')
  })

  return new Set(transformedWords).size
}

export function containsDuplicate(nums: number[]): boolean {
  return new Set(nums).size !== nums.length
}

export function arrayPairSum(nums: number[]): number {
  const sortedAry = [...nums].sort((a, b) => a - b)

  let total = 0
  for (let i = 0; i < sortedAry.length; i += 2) {
    total += Math.min(sortedAry[i], sortedAry[i + 1])
  }
  return total
}

export function sortArrayByParity(nums: number[]): number[] {
  return nums.toSorted((a, b) => {
    // better:
    // return a % 2 === 0 ? -1 : 1
    const isEven = (n: number) => n % 2 === 0
    return isEven(a) && !isEven(b) ? -1 : 1
  })
}

export function isValid(s: string): boolean {
  const bracketsMap = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ])

  const brackets: string[] = []

  for (let i = 0; i < s.length; i++) {
    const value = bracketsMap.get(s[i])
    if (value) {
      brackets.push(value)
    } else {
      const bracket = brackets.pop()
      if (s[i] !== bracket) return false
    }
  }

  return brackets.length === 0
}

export function longestCommonPrefix(strs: string[]): string {
  let result = ''

  for (let i = 0; i < strs[0].length; i++) {
    let chars = ''

    for (const str of strs) {
      chars += str[i]
    }

    if (chars !== chars[0].repeat(strs.length)) break

    result += chars[0]
  }

  return result
}

export function romanToInt(s: string): number {
  const singleMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ])
  const doubleMap = new Map([
    ['IV', 4],
    ['IX', 9],
    ['XL', 40],
    ['XC', 90],
    ['CD', 400],
    ['CM', 900],
  ])

  let result = 0
  for (let i = 0; i < s.length; i++) {
    const single = singleMap.get(s[i])
    const double = doubleMap.get(s[i] + s[i + 1])
    if (double) {
      result += double
      i++
    } else if (single) {
      result += single
    }
  }
  return result
}

export function twoSum(nums: number[], target: number): number[] {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i]
    let n2 = target - n
    if (map.has(n2)) {
      return [map.get(n2), i]
    } else {
      map.set(n, i)
    }
  }
  return [-1, -1]
}
