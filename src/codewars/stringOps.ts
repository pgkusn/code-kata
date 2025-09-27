import * as R from 'ramda'

export function stringOps() {
  const transferArray = (ary: string[][]) => {
    const transferredArray = Array.from({ length: ary.length }, () => Array(ary.length).fill(''))
    for (let i = 0; i < ary.length; i++) {
      for (let j = 0; j < ary.length; j++) {
        transferredArray[j][i] = ary[i][j]
      }
    }
    return transferredArray
  }

  const diag1Sym = (s: string): string => {
    return R.pipe(
      R.split('\n'),
      R.map(R.split('')),
      transferArray,
      R.map(R.join('')),
      R.join('\n')
    )(s)
  }

  const rot90Clock = (s: string): string => {
    return R.pipe(
      R.split('\n'),
      R.map(R.split('')),
      transferArray,
      R.map(R.pipe(R.reverse, R.join(''))),
      R.join('\n')
    )(s)
  }

  const selfieAndDiag1 = (s: string): string => {
    const transferredArray = R.pipe(
      R.split('\n'),
      R.map(R.split('')),
      transferArray,
      R.map(R.join(''))
    )(s)

    const processArray = (transferred: string[]) => (original: string[]) => {
      return original.map((item, index) => `${item}|${transferred[index]}`)
    }

    return R.pipe(R.split('\n'), processArray(transferredArray), R.join('\n'))(s)
  }

  const oper = (fct: (s: string) => string, s: string): string => {
    return fct(s)
  }

  return {
    rot90Clock,
    diag1Sym,
    selfieAndDiag1,
    oper,
  }
}