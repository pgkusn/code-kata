export function stairsIn20(s: number[][]): number {
  return s.flat().reduce((previous, current) => previous + current) * 20
}