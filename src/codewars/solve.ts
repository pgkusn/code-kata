export function solve(s: string) {
  // better:
  // const consonants = s.split(/[aeiou]/)
  const consonants = s.replace(/[aeiou]/g, ',').split(',')

  const getValue = (letter: string) => {
    return letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1
  }

  const values = consonants.map(item => {
    return [...item].reduce((prev, curr) => prev + getValue(curr), 0)
  })

  return Math.max(...values)
}