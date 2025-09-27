export function step(g: number, m: number, n: number): [number, number] | null {
  const isPrime = (n: number) => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
      if (n % i === 0) return false
    }
    return true
  }

  for (let i = m; i <= n - g; i++) {
    const next = i + g
    if (isPrime(i) && isPrime(next)) {
      return [i, next]
    }
  }
  return null
}