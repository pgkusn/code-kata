export function arrayMadness(a: number[], b: number[]): boolean {
  const sumA = a.map(n => n ** 2).reduce((previous, current) => previous + current)
  const sumB = b.map(n => n ** 3).reduce((previous, current) => previous + current)
  return sumA > sumB
}