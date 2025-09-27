export function flickSwitch(arr: string[]): boolean[] {
  let a = true
  return arr.map(b => (b === 'flick' ? (a = !a) : a))
}