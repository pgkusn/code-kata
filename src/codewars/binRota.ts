export function binRota(arr: string[][]): string[] {
  return arr.reduce((previous, current, index) => {
    return previous.concat(index % 2 === 0 ? current : current.reverse())
  }, [] as string[])
}