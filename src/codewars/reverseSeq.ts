export function reverseSeq(n: number): number[] {
  const ary: number[] = []
  for (let i = n; i > 0; i--) {
    ary.push(i)
  }
  return ary
}