export function diamond(n: number): string | null {
  if (n % 2 === 0 || n < 1) return null

  const printLine = (i: number) => {
    const chars = '*'.repeat(i)
    const spaces = ' '.repeat((n - i) / 2)
    return spaces + chars + '\n'
  }

  let result = ''
  for (let i = 1; i < n; i += 2) {
    result += printLine(i)
  }
  for (let i = n; i > 0; i -= 2) {
    result += printLine(i)
  }
  return result
}