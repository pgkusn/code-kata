export function thirt(n: number): number {
  const getValue = (num: number) => {
    const arr = [...num.toString()].toReversed()
    const value = arr.reduce((prev, curr, index) => {
      const res = (10 ** index % 13) * Number(curr)
      return prev + res
    }, 0)

    if (value === num) return value

    return getValue(value)
  }

  return getValue(n)
}