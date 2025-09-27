import * as R from 'ramda'

export function backwardsPrime(start: number, stop: number): number[] {
  const isPrime = (n: number) => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
      if (n % i === 0) return false
    }
    return true
  }
  const isPalindrome = (s: string) => R.reverse(s) === s

  const result = []
  for (let n = start; n <= stop; n++) {
    const isMatch = isPrime(n) && isPrime(+R.reverse(String(n))) && !isPalindrome(String(n))
    if (isMatch) result.push(n)
  }
  return result

  // better
  // const isMatch = (n: number) => {
  //   return isPrime(n) && isPrime(+R.reverse(String(n))) && !isPalindrome(String(n))
  // }
  // return R.range(start, stop + 1).filter(isMatch)
}