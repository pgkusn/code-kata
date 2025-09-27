export function expandedForm(num: number): string {
  const numStr = String(num)
  const result = []
  for (let i = numStr.length - 1, j = 0; i >= 0; i--, j++) {
    const num = Number(numStr[i]) * 10 ** j
    if (num) {
      result.unshift(num)
    }
  }
  return result.join(' + ')

  // better
  // return [...String(num)]
  //   .reverse()
  //   .map((n, i) => Number(n) * 10 ** i)
  //   .filter(Boolean)
  //   .reverse()
  //   .join(' + ')
}