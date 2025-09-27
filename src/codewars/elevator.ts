export function elevator(left: number, right: number, call: number): string {
  const leftDistance = Math.abs(call - left)
  const rightDistance = Math.abs(call - right)
  return leftDistance < rightDistance ? 'left' : 'right'
}