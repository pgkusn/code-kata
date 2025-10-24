import _ from 'lodash/fp.js'

export function balance(book: string) {
  // TODO: 清理字串
  const bookList = book.split('\n')

  // TODO: 計算總數 (四捨五入)
  const getTotal = (data: string[]) => {
    return data.reduce((prev, curr) => {
      const splitted = curr.split(' ')
      const amount = Number.parseFloat(splitted.at(-1))
      return prev + amount
    }, 0)
  }
  const total = getTotal(bookList.slice(1))
  console.log(total)

  // TODO: 計算平均數
  const getAverage = () => {}

  return _.pipe(
    // TODO: 四捨五入
    _.reduce((prev, curr) => {
      const splitted = curr.split(' ')
      const amount = Number.parseFloat(splitted.at(-1))
      const sum = prev.length ? prev.at(-1).split(' ').at(-1) - amount : amount
      const formatted =
        splitted.length === 1 ? `Original Balance: ${sum}` : `${curr} Balance ${sum}`
      prev.push(formatted)
      return prev
    }, [])
    // TODO: 加上總數與平均數
  )(bookList)
}

const input = `1000.00
125 Market 125.45
126 Hardware 34.95
127 Video 7.45
128 Book 14.32
129 Gasoline 16.10`

const result = balance(input)
// console.log(result)
