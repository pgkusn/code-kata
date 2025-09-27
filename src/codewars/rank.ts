import * as R from 'ramda'

export function rank(st: string, we: number[], n: number): string {
  if (st === '') return 'No participants'
  if (n > we.length) return 'Not enough participants'

  const mapIndexed = R.addIndex(R.map)

  const calculate = (we: number[]) => (name: string, index: number) => {
    return R.pipe(
      R.split(''),
      R.map(R.pipe(R.toUpper, char => char.charCodeAt(0) - 64)),
      R.sum,
      R.add(name.length),
      R.multiply(we[index]),
      value => ({ name, value })
    )(name)
  }

  const winningNumbers = R.pipe(
    R.split(','),
    // @ts-ignore
    mapIndexed(calculate(we)),
    // @ts-ignore
    R.sortWith([R.descend(R.prop('value')), R.ascend(R.prop('name'))])
  )(st) as { name: string; value: number }[]

  return winningNumbers[n - 1].name
}