export function howMuch(m: number, n: number): string[][] {
  const result = []

  for (let i = Math.min(m, n); i <= Math.max(m, n); i++) {
    const c = (i - 1) % 9 === 0 && (i - 1) / 9
    const b = (i - 2) % 7 === 0 && (i - 2) / 7

    if (c && b) {
      result.push([`M: ${i}`, `B: ${b}`, `C: ${c}`])
    }
  }

  return result
}