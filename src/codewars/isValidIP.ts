import * as R from 'ramda'

export function isValidIP(str: string): boolean {
  const validate = (ary: string[]) => {
    if (ary.length !== 4) return false
    return ary.every(s => /^(?!0\d)\d{1,3}$/.test(s) && +s <= 255)
  }
  return R.pipe(R.split('.'), validate)(str)
}