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