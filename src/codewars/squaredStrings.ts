import * as R from 'ramda'

export function rot(s: string): string {
  return R.pipe(R.split('\n'), R.reverse, R.map(R.reverse), R.join('\n'))(s)
}

export function selfieAndRot(s: string): string {
  const generateDots = (word: string) => '.'.repeat(word.length)

  const first = R.pipe(
    R.split('\n'),
    R.map((word: string) => word + generateDots(word))
  )(s)

  const last = R.pipe(
    R.split('\n'),
    R.reverse,
    R.map((word: string) => generateDots(word) + R.reverse(word))
  )(s)

  return R.pipe(R.concat(first), R.join('\n'))(last)
}

export function oper(fn: (s: string) => string, s: string): string {
  return fn(s)
}
