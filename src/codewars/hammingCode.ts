import * as R from 'ramda'

export function hammingCode() {
  const encode = (text: string): string => {
    return R.pipe(
      R.split(''),
      R.map(
        R.pipe(
          x => x.charCodeAt(0),
          x => x.toString(2),
          x => x.padStart(8, '0'),
          R.split(''),
          R.reduce((prev, curr: string) => prev + curr.repeat(3), '')
        )
      ),
      R.join('')
    )(text)
  }

  const decode = (bits: string): string => {
    const decodeChunk = ([...str]) => {
      return str.filter(x => x === '0').length >= 2 ? '0' : '1'
    }

    return R.pipe(
      R.match(/\d{3}/g),
      R.map(decodeChunk),
      R.join(''),
      R.match(/\d{8}/g),
      R.map(R.pipe(x => parseInt(x, 2), String.fromCharCode)),
      R.join('')
    )(bits)
  }

  return { encode, decode }
}