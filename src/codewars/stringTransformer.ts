import * as R from 'ramda'

export function stringTransformer(str: string) {
  const transform = (x: string) => {
    return /[A-Z]/.test(x) ? x.toLowerCase() : x.toUpperCase()
    // another
    // return x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()
  }
  return R.pipe(R.replace(/[A-Za-z]/g, transform), R.split(' '), R.reverse, R.join(' '))(str)
}