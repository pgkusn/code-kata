import * as R from 'ramda'

export function binaryToString(binary: string) {
  const sliceString = (str: string) => {
    const sliced = []
    for (let i = 0; i < str.length; i += 8) {
      sliced.push(str.slice(i, i + 8))
    }
    return sliced
  }

  return R.pipe(
    sliceString,
    R.map(R.pipe(x => parseInt(x, 2), String.fromCharCode)),
    R.join('')
  )(binary)
}