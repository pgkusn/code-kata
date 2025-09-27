export function digitalRoot(n: number): number {
  function sum(n: number): number {
    const numbers = [...`${n}`].map(s => Number(s))
    return numbers.reduce((prev, curr) => prev + curr)
  }

  while (n > 9) {
    n = sum(n)
  }
  return n
}