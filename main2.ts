export function getRealFloor(n: number): number {
  if (n < 1) return n
  if (n > 13) return n - 2
  return n - 1
}
export function removeChar(str: string): string {
  return str.slice(1, -1)
}
export function abbrevName(name: string): string {
  return name
    .split(' ')
    .map(([s]) => s.toUpperCase())
    .join('.')
}
export function smallEnough(a: number[], limit: number): boolean {
  return a.every(item => item <= limit)
}
export function isPalindrome(x: string): boolean {
  const reversed = x.split('').reverse().join('')
  return reversed.toLowerCase() === x.toLowerCase()
}
export function updateLight(current: string): string {
  const lights = ['red', 'green', 'yellow']
  const currentIndex = lights.findIndex(item => item === current)
  return lights[(currentIndex + 1) % lights.length]

  // better
  // const lights = ['red', 'green', 'yellow']
  // const currentIndex = lights.indexOf(current)
  // return lights[(currentIndex + 1) % lights.length]
}
export function getMiddle(s: string) {
  if (s.length % 2 === 0) {
    const index = s.length / 2
    return s[index - 1] + s[index]
  } else {
    const index = Math.floor(s.length / 2)
    return s[index]
  }

  // better
  // const start = Math.floor(s.length / 2)
  // return s.length % 2 === 0 ? s.slice(start - 1, start + 1) : s[start]
}
export function noSpace(x: string): string {
  return x
    .split('')
    .filter(s => s.trim())
    .join('')

  // better
  // return x.replaceAll(' ', '')
}
export function SeriesSum(n: number): string {
  const total = [...Array(n)].reduce((prev, curr, index) => {
    const base = index * 3 + 1
    return prev + 1 / base
  }, 0)
  return total.toFixed(2)
}
export function correct(s: string): string {
  return s.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I')

  // better
  // return s.replaceAll('5', 'S').replaceAll('0', 'O').replaceAll('1', 'I')
}
export function powersOfTwo(n: number): number[] {
  return [...Array(n + 1)].map((_, i) => Math.pow(2, i))
}
export function doubleChar(str: string): string {
  return str
    .split('')
    .map(s => s + s)
    .join('')

  // better
  // return str
  //   .split('')
  //   .map(s => s.repeat(2))
  //   .join('')
}
export function repeatStr(n: number, s: string): string {
  return s.repeat(n)
}
export function between(a: number, b: number): number[] {
  const ary: number[] = []
  for (let i = a; i <= b; i++) {
    ary.push(i)
  }
  return ary
}
export function power(x: number, y: number) {
  const numbers = [...Array(y)].fill(x)
  return numbers.reduce((prev, curr) => prev * curr)
}
export function reverseSeq(n: number): number[] {
  const ary: number[] = []
  for (let i = n; i > 0; i--) {
    ary.push(i)
  }
  return ary

  // or
  // return [...Array(n)].map((e, i) => n - i)
}
export function sakuraFall(v: number): number {
  return v > 0 ? 400 / v : 0
}
