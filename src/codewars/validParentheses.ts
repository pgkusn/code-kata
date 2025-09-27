export function validParentheses(parenStr: string): boolean {
  let count = 0
  for (const p of parenStr) {
    count += p === '(' ? 1 : -1
    if (count < 0) return false
  }
  return count === 0
}