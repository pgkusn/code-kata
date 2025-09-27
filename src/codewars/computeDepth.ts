import * as R from 'ramda'

export function computeDepth(n: number): number {
  const numbers: Set<string> = new Set()
  let multiple = 0

  while (numbers.size < 10) {
    multiple++

    R.pipe(
      R.toString,
      R.split(''),
      R.forEach((n: string) => numbers.add(n))
    )(n * multiple)
  }

  return multiple
}