export function realNumbers(n: number): number {
  let total = 0
  const list = [2, 3, 5]

  for (let m = 1; m <= n; m++) {
    if (list.every(x => m % x !== 0)) total++
  }

  return total
}