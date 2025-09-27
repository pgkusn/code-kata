import * as R from 'ramda'

export const travel = (r: string, zipcode: string): string => {
  const regex = new RegExp(`^(\\d+)\\s(.+)\\s${zipcode}`)

  const formatAddress = (data: string[][]) => {
    const streetAndTown = R.pipe(R.map(R.last), R.join(','))(data)
    const houseNumber = R.pipe(R.map(R.head), R.join(','))(data)
    return `${streetAndTown}/${houseNumber}`
  }

  return R.pipe(
    R.split(','),
    R.filter(R.includes(zipcode)),
    R.map(R.pipe(R.match(regex), R.slice(1, 3)) as (a: string) => string[]),
    formatAddress,
    R.concat(`${zipcode}:`)
  )(r)
}