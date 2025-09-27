export function isValidWalk(walk: string[]) {
  const walkCount: { [key: string]: number } = { n: 0, s: 0, w: 0, e: 0 }
  walk.forEach(w => walkCount[w]++)

  return walk.length === 10 && walkCount.n - walkCount.s === 0 && walkCount.w - walkCount.e === 0
  // better
  // return walk.length === 10 && walkCount.n === walkCount.s && walkCount.w === walkCount.e
}