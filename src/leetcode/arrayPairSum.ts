export function arrayPairSum(nums: number[]): number {
  const sortedAry = [...nums].sort((a, b) => a - b)

  let total = 0
  for (let i = 0; i < sortedAry.length; i += 2) {
    total += Math.min(sortedAry[i], sortedAry[i + 1])
  }
  return total
}