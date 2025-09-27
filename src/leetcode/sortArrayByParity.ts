export function sortArrayByParity(nums: number[]): number[] {
  return nums.toSorted((a, b) => {
    // better:
    // return a % 2 === 0 ? -1 : 1
    const isEven = (n: number) => n % 2 === 0
    return isEven(a) && !isEven(b) ? -1 : 1
  })
}