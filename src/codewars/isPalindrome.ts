export function isPalindrome(x: string): boolean {
  const reversed = x.split('').reverse().join('')
  return reversed.toLowerCase() === x.toLowerCase()
}