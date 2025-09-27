export const isPangram = (phrase: string): boolean => {
  const matched = phrase.match(/[A-Za-z]/g) ?? []
  const mapped = matched.map(s => s.toLocaleLowerCase())
  return [...new Set(mapped)].length === 26

  // better
  // const matched = phrase.toLocaleLowerCase().match(/[a-z]/g)
  // return new Set(matched).size === 26
}