export const gcdi = (x: number, y: number): number => {
  x = Math.abs(x)
  y = Math.abs(y)

  const max = Math.max(x, y)

  for (let n = max; n > 0; n--) {
    if (x % n === 0 && y % n === 0) {
      return n
    }
  }
  return NaN
}

export const lcmu = (a: number, b: number): number => {
  a = Math.abs(a)
  b = Math.abs(b)

  const max = Math.max(a, b)

  for (let n = max; n > 0; n--) {
    if (a % n === 0 && b % n === 0) {
      return n * (a / n) * (b / n)
    }
  }
  return NaN
}

export const som = (a: number, b: number): number => {
  return a + b
}

export const maxi = (a: number, b: number): number => {
  return Math.max(a, b)
}

export const mini = (a: number, b: number): number => {
  return Math.min(a, b)
}

export const operArray = (
  fct: (a: number, b: number) => number,
  arr: number[],
  init: number
): number[] => {
  return arr.reduce((prev: number[], curr) => {
    const res = fct(prev.at(-1) ?? init, curr)
    prev.push(res)
    return prev
  }, [])
}
