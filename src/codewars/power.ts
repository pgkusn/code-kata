export function power(x: number, y: number) {
  const numbers = Array(y).fill(x)
  return numbers.reduce((prev, curr) => prev * curr)
}