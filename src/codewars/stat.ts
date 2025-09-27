import * as R from 'ramda'

export const stat = (s: string): string => {
  if (!s) return ''

  const toSeconds = ([h, m, s]: string[]) => +h * 3600 + +m * 60 + +s
  const secondsList = R.pipe(R.split(','), R.map(R.pipe(R.split('|'), toSeconds)))(s)

  const getRange = (items: number[]) => {
    const max = Math.max(...items)
    const min = Math.min(...items)
    return max - min
  }

  const getAverage = (items: number[]) => {
    return R.pipe(R.sum, n => n / items.length, Math.floor)(items)
  }

  const getMedian = (items: number[]) => {
    const sorted = items.toSorted((a, b) => a - b)
    if (sorted.length % 2 === 0) {
      return getAverage([sorted[sorted.length / 2], sorted[sorted.length / 2 - 1]])
    } else {
      return sorted[Math.floor(sorted.length / 2)]
    }
  }

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
    const m = Math.floor((seconds % 3600) / 60)
    const s = seconds % 60
    const pad = (n: number) => String(n).padStart(2, '0')
    return `${pad(h)}|${pad(m)}|${pad(s)}`
  }

  return (
    `Range: ${R.pipe(getRange, formatTime)(secondsList)}` +
    ` Average: ${R.pipe(getAverage, formatTime)(secondsList)}` +
    ` Median: ${R.pipe(getMedian, formatTime)(secondsList)}`
  )
}