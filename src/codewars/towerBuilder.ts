export const towerBuilder = (nFloors: number): string[] => {
  // [                 字串長度  空白長度
  //   '     *     ',  1+0=1    11-1=10
  //   '    ***    ',  2+1=3    11-3=8
  //   '   *****   ',  3+2=5    11-5=6
  //   '  *******  ',  4+3=7    11-7=4
  //   ' ********* ',  5+4=9    11-9=2
  //   '***********',  6+5=11   11-11=0
  // ]

  const list: string[] = []

  // 產生字串
  for (let i = 1; i <= nFloors; i++) {
    let str = ''
    for (let j = 1; j <= i + i - 1; j++) {
      str += '*'
    }
    list.push(str)
  }

  // 產生前後空白
  return list.map(s => {
    const spaces = (list[list.length - 1].length - s.length) / 2

    s = s.padStart(s.length + spaces, ' ')
    s = s.padEnd(s.length + spaces, ' ')

    return s
  })
}