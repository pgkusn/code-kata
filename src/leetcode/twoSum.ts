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