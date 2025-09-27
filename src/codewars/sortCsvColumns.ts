import _ from 'lodash/fp.js'

export function sortCsvColumns(csvFileContent: string): string {
  interface SortableItem {
    [key: number]: string
  }

  const toSortableItems = (arr: string[][]): SortableItem[] => {
    return Array.from({ length: arr[0].length }, (_, i) => {
      return arr.reduce((prev: { [key: number]: string }, _, index) => {
        prev[index] = arr[index][i]
        return prev
      }, {})
    })
  }

  const toValues = (arr: { [key: string]: string }) => Object.values(arr)

  const transpose = (arr: string[][]) => {
    const transposedArr: string[][] = []
    arr.forEach(row => {
      row.forEach((cell, columnIndex) => {
        if (!transposedArr[columnIndex]) {
          transposedArr[columnIndex] = []
        }
        transposedArr[columnIndex].push(cell)
      })
    })
    return transposedArr
  }

  const sortCsv = _.pipe(
    _.split('\n'),
    _.map(_.split(';')),
    toSortableItems,
    _.sortBy((o: SortableItem) => o[0].toLowerCase()),
    _.map(toValues),
    transpose,
    _.map(_.join(';')),
    _.join('\n')
  )

  return sortCsv(csvFileContent)
}