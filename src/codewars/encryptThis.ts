export const encryptThis = (str: string): string => {
  const encryptWord = (word: string) => {
    const [first, ...rest] = [...word]

    const temp = rest[0]
    rest[0] = rest[rest.length - 1]
    rest[rest.length - 1] = temp

    return first.charCodeAt(0) + rest.join('')
  }

  return str && str.split(' ').map(encryptWord).join(' ')
}