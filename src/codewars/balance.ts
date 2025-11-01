import _ from 'lodash/fp.js'

export function balance(book: string) {
  const bookList = book
    .replace(/[^a-zA-Z\d\.\s]/g, '')
    .split('\n')
    .filter(Boolean)

  // 輔助函式：安全地解析金額（先四捨五入到兩位小數）
  const parseAmount = (value: string | undefined): number => {
    const num = Number.parseFloat(value ?? '0') || 0
    // 使用字串方法進行精確的四捨五入，避免浮點數精度問題
    return Math.round(num * 100) / 100
  }

  // 輔助函式：從格式化的行中提取餘額
  const extractBalance = (formattedLine: string): number => {
    const parts = formattedLine.split(' ')
    return parseAmount(parts.at(-1))
  }

  // 輔助函式：將金額四捨五入到小數點後兩位（使用整數運算避免浮點數問題）
  const roundToTwoDecimals = (value: number): number => {
    return Math.round(value * 100) / 100
  }

  const getTotal = (data: string[]) => {
    const totalCents = data.reduce((prev, curr) => {
      const parts = curr.split(' ')
      const amount = parseAmount(parts.at(-1))
      return prev + Math.round(amount * 100)
    }, 0)
    return totalCents / 100
  }

  const getAverage = (sum: number, count: number) => {
    return roundToTwoDecimals(sum / count)
  }

  return _.pipe(
    _.reduce((formattedLines: string[], currentLine: string) => {
      const parts = currentLine.split(' ')
      const expense = parseAmount(parts.at(-1))

      // 判斷是否為第一行（原始餘額）
      const isFirstLine = parts.length === 1

      // 計算新餘額
      const currentBalance = isFirstLine
        ? expense
        : roundToTwoDecimals(extractBalance(formattedLines.at(-1) ?? '') - expense)

      // 格式化輸出
      const formattedLine = isFirstLine
        ? `Original Balance: ${currentBalance.toFixed(2)}`
        : `${parts.slice(0, -1).join(' ')} ${expense.toFixed(2)} Balance ${currentBalance.toFixed(
            2
          )}`

      formattedLines.push(formattedLine)
      return formattedLines
    }, []),
    x => {
      const total = getTotal(bookList.slice(1))
      x.push(`Total expense  ${total.toFixed(2)}`)
      return x
    },
    x => {
      const total = getTotal(bookList.slice(1))
      const average = getAverage(total, bookList.length - 1)
      x.push(`Average expense  ${average.toFixed(2)}`)
      return x
    },
    _.join('\n')
  )(bookList)
}
