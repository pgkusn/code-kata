export function inArray(a1: string[], a2: string[]): string[] {
  const matchedWords = a1.reduce((prev: string[], curr) => {
    const isMatch = a2.find(item => item.match(curr))
    if (isMatch) {
      prev.push(curr)
    }
    return prev
  }, [])

  // better
  // const matchedWords = a1.filter(substr => {
  //   const isMatch = a2.some(str => str.includes(substr))
  //   return isMatch
  // })

  return matchedWords.sort()
}