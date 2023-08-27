/**
 * Gravity Flip
 * @param {string} d
 * @param {array} a
 * @returns {array}
 * @see https://www.codewars.com/kata/5f70c883e10f9e0001c89673
 */
export const flip = (d, a) => {
  return a.sort((a, b) => (d === 'R' ? a - b : b - a))
}
/**
 * A wolf in sheep's clothing
 * @param {array} queue
 * @returns {string}
 * @see https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
 */
export const warnTheSheep = queue => {
  const n = [...queue].reverse().indexOf('wolf')
  return n === 0
    ? 'Pls go away and stop eating my sheep'
    : `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`
}
/**
 * Total amount of points
 * @param {array} games
 * @returns {number}
 * @see https://www.codewars.com/kata/5bb904724c47249b10000131
 */
export const points = games => {
  return games.reduce((previousValue, currentValue) => {
    const [x, y] = currentValue.split(':')
    if (x > y) return previousValue + 3
    if (x < y) return previousValue
    if (x === y) return previousValue + 1
  }, 0)
}
