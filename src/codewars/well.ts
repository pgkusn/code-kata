export function well(x: string[]): string {
  const filtered = x.filter(item => item === 'good')
  if (filtered.length > 2) {
    return 'I smell a series!'
  } else if (filtered.length > 0) {
    return 'Publish!'
  } else {
    return 'Fail!'
  }
}