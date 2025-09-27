export function decipherThis(str: string): string {
  const decipherWord = (word: string) => {
    const [, x, y = ''] = word.match(/(\d+)(\w*)/) ?? []

    const arrY = [...y]
    const temp = arrY[0]
    arrY[0] = arrY[arrY.length - 1]
    arrY[arrY.length - 1] = temp

    return String.fromCharCode(+x) + arrY.join('')
  }

  return str && str.split(' ').map(decipherWord).join(' ')
}