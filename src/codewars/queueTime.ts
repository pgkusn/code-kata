export function queueTime(customers: number[], n: number): number {
  const counters = Array(n).fill(0)

  const getMinIndex = () => {
    const min = Math.min(...counters)
    return counters.findIndex(n => n === min)

    // better
    // return counters.indexOf(min)
  }

  for (const n of customers) {
    counters[getMinIndex()] += n
  }

  return Math.max(...counters)
}