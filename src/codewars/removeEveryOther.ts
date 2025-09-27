export function removeEveryOther<T>(arr: T[]): T[] {
  return arr.filter((value, index) => index % 2 === 0)
}