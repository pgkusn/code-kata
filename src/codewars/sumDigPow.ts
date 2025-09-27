export function sumDigPow(a: number, b: number) {
  const sum = (n: number) => {
    return [...String(n)].reduce((prev, acc, index) => prev + Number(acc) ** (index + 1), 0)
  }

  const result = []
  for (let n = a; n <= b; n++) {
    if (n === sum(n)) {
      result.push(n)
    }
  }
  return result
}