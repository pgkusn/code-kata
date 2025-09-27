export function nthFibo(n: number): number {
  const fibonacci: number[] = []

  for (let i = 0; i < n; i++) {
    const num = i > 1 ? fibonacci[i - 2] + fibonacci[i - 1] : i
    fibonacci.push(num)
  }

  return fibonacci.pop() || 0
}