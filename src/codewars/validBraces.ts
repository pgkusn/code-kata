export function validBraces(braces: string): boolean {
  const mapping: { [key: string]: string } = { ')': '(', ']': '[', '}': '{' }

  const stack = []
  for (const s of braces) {
    if (mapping[s] && mapping[s] === stack[stack.length - 1]) {
      stack.pop()
    } else {
      stack.push(s)
    }
  }

  return stack.length === 0
}