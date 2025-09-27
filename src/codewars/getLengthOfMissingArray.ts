export function getLengthOfMissingArray(arrayOfArrays: any[] | null): number {
  if (!arrayOfArrays) return 0

  const numbers = arrayOfArrays.map(array => (array ? array.length : 0)).toSorted()

  for (let n = numbers[0], i = 0; n < numbers.at(-1); n++, i++) {
    if (!n) return 0
    if (n !== numbers[i]) return n
  }

  return 0
}