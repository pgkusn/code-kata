export function sumOfDifferences(arr: number[]): number {
  if (arr.length < 2) return 0
  const sortedArr = [...arr].sort((a, b) => b - a)
  return sortedArr.reduce((previousValue, currentValue, currentIndex) => {
    const next = sortedArr[currentIndex + 1]
    return previousValue + (currentValue - next || 0)
  }, 0)
}