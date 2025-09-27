export function isValid(s: string): boolean {
  const bracketsMap = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}'],
  ])

  const brackets: string[] = []

  for (let i = 0; i < s.length; i++) {
    const value = bracketsMap.get(s[i])
    if (value) {
      brackets.push(value)
    } else {
      const bracket = brackets.pop()
      if (s[i] !== bracket) return false
    }
  }

  return brackets.length === 0
}