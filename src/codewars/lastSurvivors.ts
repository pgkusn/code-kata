export function lastSurvivors(str: string): string {
  const getNextChar = (char: string) => {
    let charCode = char.charCodeAt(0) + 1

    if (charCode > 'z'.charCodeAt(0)) {
      charCode = 'a'.charCodeAt(0)
    }

    return String.fromCharCode(charCode)
  }

  const replaceBy = (source: string, target: string) => {
    const regex = new RegExp(`${target}{2}`, 'g')
    return source.replace(regex, getNextChar(target))
  }

  const sortAndReplaceStr = (str: string): string => {
    const sortedStr = [...str].sort().join('')

    if (str === sortedStr) return str

    let replacedStr = sortedStr

    for (const s of replacedStr) {
      replacedStr = replaceBy(replacedStr, s)
    }

    return sortAndReplaceStr(replacedStr)
  }

  return sortAndReplaceStr(str)
}