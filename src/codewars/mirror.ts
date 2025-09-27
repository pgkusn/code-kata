import * as R from 'ramda'

export const mirror = (obj: Record<string, any>): Record<string, string> => {
  const newObj: Record<string, string> = {}

  Object.keys(obj).forEach(key => {
    newObj[key] = R.reverse(key)
  })

  return newObj

  // better
  // return Object.keys(obj).reduce((o: Record<string, string>, k) => {
  //   o[k] = R.reverse(k)
  //   return o
  // }, {})
}