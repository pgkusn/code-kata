export function pillars(numPill: number, dist: number, width: number): number {
  if (numPill === 1) return 0
  return dist * 100 * (numPill - 1) + width * (numPill - 2)
}