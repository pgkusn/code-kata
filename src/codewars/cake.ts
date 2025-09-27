export function cake(x: number, y: string): string {
  const total = y.split('').reduce((previous, current, index) => {
    const charCode = current.charCodeAt(0)
    return previous + (index % 2 === 0 ? charCode : charCode - 96)
  }, 0)
  return total > x * 0.7 ? 'Fire!' : 'That was close!'
}