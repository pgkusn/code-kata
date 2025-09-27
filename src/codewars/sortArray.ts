export function sortArray(array: number[]): (number | undefined)[] {
  const sortedOdds = array.filter(n => n % 2).sort((a, b) => a - b)
  return array.map(n => (n % 2 ? sortedOdds.shift() : n))
}