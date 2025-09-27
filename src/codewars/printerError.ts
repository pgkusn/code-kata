export function printerError(str: string): string {
  let errorCount = 0
  const maxCharCode = 'm'.charCodeAt(0)

  for (const s of str) {
    if (s.charCodeAt(0) > maxCharCode) {
      errorCount++
    }

    // better
    // if (s > 'm') {
    //   errorCount++
    // }
  }

  return `${errorCount}/${str.length}`
}