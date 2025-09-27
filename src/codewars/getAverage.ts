export function getAverage(marks: number[]): number {
  const average = marks.reduce((a, b) => a + b) / marks.length
  return Math.floor(average)
}