export function present(x: string, y: number): string | number {
  if (x === 'goodpresent') {
    return Array.from(x, s => String.fromCharCode(s.charCodeAt(0) + y)).join('')
  }
  if (x === 'crap' || x === 'empty') {
    return [...x].sort().join('')
  }
  if (x === 'bang') {
    return Array.from(x, s => s.charCodeAt(0) - y).reduce((a, b) => a + b)
  }
  if (x === 'badpresent') {
    return 'Take this back!'
  }
  if (x === 'dog') {
    return `pass out from excitement ${y} times`
  }
  return ''
}