import * as R from 'ramda'

const getMonthlyValues = (town: string, s: string) => {
  const toObj = ([town, value]: string[]) => ({ town, value })

  const rainfallOfTown = R.pipe(
    R.split('\n'),
    R.map(R.pipe(R.split(':'), toObj)),
    R.find(R.propEq(town, 'town'))
  )(s) as { town: string; value: string }

  if (!rainfallOfTown) return

  return R.match(/\d+\.\d/g, rainfallOfTown.value)
}

export const mean = (town: string, s: string): number => {
  const monthlyValues = getMonthlyValues(town, s)

  if (!monthlyValues) return -1

  return R.pipe(R.map(Number), R.sum, R.divide(R.__, 12))(monthlyValues)
}

export const variance = (town: string, s: string): number => {
  const monthlyValues = getMonthlyValues(town, s)

  if (!monthlyValues) return -1

  const mean = R.pipe(R.map(Number), R.sum, R.divide(R.__, 12))(monthlyValues)
  return monthlyValues.reduce((prev, curr) => prev + Math.pow(+curr - mean, 2), 0) / 12
}
