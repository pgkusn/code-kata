export function manhattanDistance(pointA: [number, number], pointB: [number, number]): number {
  const [x1, y1] = pointA
  const [x2, y2] = pointB

  const getDistance = (a: number, b: number) => Math.abs(a - b)

  return getDistance(x1, x2) + getDistance(y1, y2)
}