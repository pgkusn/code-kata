export function grow(x: number[]): number {
  return x.reduce((previousValue, currentValue, currentIndex) => {
    if (currentIndex === 0) return previousValue
    return previousValue * currentValue
  }, x[0])
}