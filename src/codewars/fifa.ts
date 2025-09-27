export function fifa(ticket: Record<string, string>, results: string[]): string {
  const toNumber = (value: string): number => {
    const regex = /^£(\d+)/
    const match = regex.exec(value)
    return match ? Number(match[1]) : 0
  }
  const getResult = (a: number, b: number): string => {
    if (a > b) return 'Home'
    if (a < b) return 'Away'
    if (a === b) return 'Draw'
    return ''
  }
  const ticketList = Object.entries(ticket)
  const total = results.reduce((previous, current, index) => {
    const [a, b] = current.split('-').map(Number)
    const result = getResult(a, b)
    const [key, value] = ticketList[index]
    return key === result ? previous + toNumber(value) : previous
  }, 0)
  return `£${total}`
}