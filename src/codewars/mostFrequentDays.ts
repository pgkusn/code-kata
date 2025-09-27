import * as R from 'ramda'

export function mostFrequentDays(year: number): string[] {
  const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const weekOrder = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  const isLeapYear = (year: number) => {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
  }

  const getMostFrequent = (weekday: string[]) => (year: number) => {
    const day = new Date(`${year}-1-1`).getDay()
    const firstDay = weekday[day]
    const secondDay = weekday[(day + 1) % 7]
    return isLeapYear(year) ? [firstDay, secondDay] : [firstDay]
  }

  const orderMostFrequent = (weekOrder: string[]) => (mostFrequent: string[]) => {
    return R.filter((day: string) => mostFrequent.includes(day))(weekOrder)
  }

  return R.pipe(getMostFrequent(weekday), orderMostFrequent(weekOrder))(year)
}