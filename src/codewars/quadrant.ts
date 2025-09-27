export function quadrant(x: number, y: number): number {
  if (x > 0 && y > 0) return 1
  if (x < 0 && y > 0) return 2
  if (x < 0 && y < 0) return 3
  if (x > 0 && y < 0) return 4
  return 0 // 當點在座標軸上時
}