export function getScore(arr: number[]): number {
  let level = 0
  let lines = 0

  const getPoint = (line: number, level: number): number => {
    const basePoints = [0, 40, 100, 300, 1200]
    return basePoints[line] * (level + 1)
  }

  return arr.reduce((previous, current) => {
    level = Math.trunc(lines / 10)
    lines += current
    return (previous += getPoint(current, level))
  }, 0)
}