import _ from 'lodash/fp.js'

export function revRot(s: string, sz: number): string {
  if (!s || sz <= 0 || s.length < sz) return ''

  const splitStr = (s: string): string[] => {
    return Array.from({ length: Math.ceil(s.length / sz) }, (_, i) => {
      const start = i * sz
      return s.slice(start, sz + start)
    })
  }

  const mapStr = (s: string): string => {
    if (s.length < sz) return ''

    if (sumStr(s) % 2 === 0) {
      return s.split('').reverse().join('')
    }

    return s.slice(1) + s[0]
  }

  const sumStr = (s: string): number => {
    return [...s].reduce((prev, curr) => prev + Number(curr), 0)
  }

  return splitStr(s).map(mapStr).join('')
}