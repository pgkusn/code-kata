export function findMissingLetter(array: string[]): string {
  for (let i = 0; i < array.length - 1; i++) {
    const charCodeA = array[i].charCodeAt(0)
    const charCodeB = array[i + 1].charCodeAt(0)

    if (charCodeB - charCodeA !== 1) {
      return String.fromCharCode(charCodeB - 1)
    }
  }

  return ''
}