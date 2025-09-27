export function solution(num: number): number {
  const multiples = []
  for (let n = 0; n < num; n++) {
    if (n % 3 === 0 || n % 5 === 0) {
      multiples.push(n)
    }
  }
  return multiples.reduce((prev, curr) => prev + curr, 0)
}