export function sumMix(x: (string | number)[]): number {
  return x.reduce((previousValue: number, currentValue) => {
    return previousValue + Number(currentValue)
  }, 0)
}