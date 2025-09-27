export function twoSum(numbers: number[], target: number) {
  for (let i = 0; i < numbers.length; i++) {
    const j = numbers.findIndex(n => target - n === numbers[i])
    if (j !== -1 && j !== i) {
      return [i, j]
    }

    // or
    // const j = numbers.findLastIndex(n => target - n === numbers[i])
    // if (j !== -1) {
    //   return [i, j]
    // }
  }

  // better
  // const map = new Map()
  // for (let i = 0; i < numbers.length; i++) {
  //   const complement = target - numbers[i]
  //   if (map.has(complement)) {
  //     return [map.get(complement), i]
  //   }
  //   map.set(numbers[i], i)
  // }
  // return []
}