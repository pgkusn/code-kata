export function between(a: number, b: number): number[] {
  const ary: number[] = []
  for (let i = a; i <= b; i++) {
    ary.push(i)
  }
  return ary
}