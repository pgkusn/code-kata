export function onlyDuplicates(str: string): string {
  function getDuplicates(str: string): string[] {
    const charCount: { [key: string]: number } = {}

    for (const s of str) {
      if (!charCount[s]) {
        charCount[s] = 1
        continue
      }
      charCount[s]++
    }

    return Object.keys(charCount).filter(key => charCount[key] > 1)
  }

  const duplicates = getDuplicates(str)
  const regex = new RegExp(`[^${duplicates.join('')}]`, 'g')
  return str.replace(regex, '')
}