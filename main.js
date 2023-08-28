/**
 * Gravity Flip
 * @param {string} d
 * @param {array} a
 * @returns {array}
 * @see https://www.codewars.com/kata/5f70c883e10f9e0001c89673
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
 * @param {array} queue
 * @returns {string}
 * @see https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
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
 * @param {array} games
 * @returns {number}
 * @see https://www.codewars.com/kata/5bb904724c47249b10000131
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
 * @param {array} arr
 * @returns {number}
 * @see https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
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
 * @param {array} array
 * @returns {array}
 * @see https://www.codewars.com/kata/5a34b80155519e1a00000009
 */
export function multipleOfIndex(array) {
  return array.filter((item, index) => (item === 0 ? true : item % index === 0))

  // better
  // return array.filter((item, index) => item === 0 || item % index === 0)
}
/**
 * CSV representation of array
 * @param {array} array
 * @returns {string}
 * @see https://www.codewars.com/kata/5a34af40e1ce0eb1f5000036
 */
export function toCsvText(array) {
  return array.map(item => item.join()).join('\n')

  // better
  // return array.join('\n')
}
/**
 * Array plus array
 * @param {array} arr1
 * @param {array} arr2
 * @returns {number}
 * @see https://www.codewars.com/kata/5a2be17aee1aaefe2a000151
 */
export function arrayPlusArray(arr1, arr2) {
  const arr = [...arr1, ...arr2]
  return arr.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
}
/**
 * Find the first non-consecutive number
 * @param {array} arr
 * @returns {(number|null)}
 * @see https://www.codewars.com/kata/58f8a3a27a5c28d92e000144
 */
export function firstNonConsecutive(arr) {
  return arr.find((n, i) => i && n - 1 !== arr[i - 1]) ?? null
}
/**
 * Find Multiples of a Number
 * @param {number} integer
 * @param {number} limit
 * @returns {array}
 * @see https://www.codewars.com/kata/58ca658cc0d6401f2700045f
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
 * @param {array} array
 * @returns {array}
 * @see https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
 */
export function invert(array) {
  return array.map(n => n * -1 || 0)

  // better
  // return array.map(n => -n || 0)
}
/**
 * Merge two sorted arrays into one
 * @param {array} arr1
 * @param {array} arr2
 * @returns {array}
 * @see https://www.codewars.com/kata/5899642f6e1b25935d000161
 */
export function mergeArrays(arr1, arr2) {
  const setObj = new Set([...arr1, ...arr2])
  return Array.from(setObj).sort((a, b) => a - b)
}
/**
 * Duck Duck Goose
 * @param {array} players
 * @param {number} goose
 * @see https://www.codewars.com/kata/582e0e592029ea10530009ce
 */
export function duckDuckGoose(players, goose) {
  return players[(goose - 1) % players.length].name
}
