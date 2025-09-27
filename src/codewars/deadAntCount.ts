import * as R from 'ramda'

export function deadAntCount(ants: string | null): number {
  if (!ants) return 0

  const countDeadAnts = (ants: string) => {
    const aCount = (ants.match(/a/g) || []).length
    const nCount = (ants.match(/n/g) || []).length
    const tCount = (ants.match(/t/g) || []).length
    return Math.max(aCount, nCount, tCount)
  }

  return R.pipe(R.replace(/ant/g, ''), countDeadAnts)(ants)
}