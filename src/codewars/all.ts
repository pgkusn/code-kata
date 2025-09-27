export function all<T>(arr: T[], fun: (item: T) => boolean): boolean {
  return arr.every(fun)
}