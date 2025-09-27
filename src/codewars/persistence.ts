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