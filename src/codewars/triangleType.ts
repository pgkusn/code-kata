export function triangleType(a: number, b: number, c: number): number {
  const isTriangle = (a: number, b: number, c: number) => {
    return a + b > c && a + c > b && b + c > a
  }
  const isAcuteTriangle = (x: number, y: number, z: number) => {
    return z ** 2 < x ** 2 + y ** 2
  }
  const isRightTriangle = (x: number, y: number, z: number) => {
    return z ** 2 === x ** 2 + y ** 2
  }
  const isObtuseTriangle = (x: number, y: number, z: number) => {
    return z ** 2 > x ** 2 + y ** 2
  }

  if (!isTriangle(a, b, c)) return 0

  const [x, y, z] = [a, b, c].sort((a, b) => a - b)

  if (isAcuteTriangle(x, y, z)) return 1
  if (isRightTriangle(x, y, z)) return 2
  if (isObtuseTriangle(x, y, z)) return 3

  return 0
}