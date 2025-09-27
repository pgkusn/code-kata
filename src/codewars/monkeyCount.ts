export function monkeyCount(n: number): number[] {
  const countList: number[] = []
  for (let i = 1; i <= n; i++) {
    countList.push(i)
  }
  return countList
}