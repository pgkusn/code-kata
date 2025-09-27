export const digPow = (n: number, p: number): number => {
  const result = [...String(n)].reduce((acc, cur, index) => acc + Number(cur) ** (p + index), 0)
  return result % n === 0 ? result / n : -1
}