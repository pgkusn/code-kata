export function tribonacci(ary: number[], n: number): number[] {
  if (n < 3) return ary.slice(0, n)

  while (ary.length < n) {
    const sum = ary[ary.length - 3] + ary[ary.length - 2] + ary[ary.length - 1]
    ary.push(sum)
  }

  return ary

  // better
  // for (let i = 0; ary.length < n; i++) {
  //   const sum = ary[i] + ary[i + 1] + ary[i + 2]
  //   ary.push(sum)
  // }
  // return ary.slice(0, n)
}