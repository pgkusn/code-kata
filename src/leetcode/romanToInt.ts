export function romanToInt(s: string): number {
  const singleMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ])
  const doubleMap = new Map([
    ['IV', 4],
    ['IX', 9],
    ['XL', 40],
    ['XC', 90],
    ['CD', 400],
    ['CM', 900],
  ])

  let result = 0
  for (let i = 0; i < s.length; i++) {
    const single = singleMap.get(s[i])
    const double = doubleMap.get(s[i] + s[i + 1])
    if (double) {
      result += double
      i++
    } else if (single) {
      result += single
    }
  }
  return result
}