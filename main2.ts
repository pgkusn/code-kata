export function reverseSeq(n: number): number[] {
  const ary: number[] = []
  for (let i = n; i > 0; i--) {
    ary.push(i)
  }
  return ary

  // or
  // return [...Array(n)].map((e, i) => n - i)
}
export function sakuraFall(v: number): number {
  return v > 0 ? 400 / v : 0
}
