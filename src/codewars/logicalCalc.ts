export function logicalCalc(array: boolean[], op: string): boolean {
  return array.reduce((previous, current) => {
    if (op === 'AND') return previous && current
    if (op === 'OR') return previous || current
    if (op === 'XOR') return previous !== current
    return previous
  })
}