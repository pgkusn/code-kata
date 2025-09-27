export function dashatize(num: number): string {
  num = Math.abs(num)

  return `${num}`.replace(/([13579])/g, '-$1-').replace(/^-|--|-$/g, x => {
    return x === '--' ? '-' : ''
  })
}