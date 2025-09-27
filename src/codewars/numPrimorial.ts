export const numPrimorial = (n: number) => {
  const isPrime = (n: number) => {
    // better:
    // for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    //   if (n % i === 0) return false
    // }
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false
    }

    return true
  }

  const primeGenerator = function* () {
    let num = 2
    while (true) {
      if (isPrime(num)) {
        yield num
      }
      num++
    }
  }

  const generator = primeGenerator()
  const primes = Array.from({ length: n }, _ => generator.next().value)
  return primes.reduce((prev, curr) => prev * curr)
}