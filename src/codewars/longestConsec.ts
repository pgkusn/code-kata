export function longestConsec(strarr: string[], k: number): string {
  const generateStringList = () => {
    const stringList = []
    for (let i = 0; i < strarr.length; i++) {
      const joinString = []
      for (let j = 0; j < k; j++) {
        joinString.push(strarr[i + j])
      }
      stringList.push(joinString.join(''))
    }
    return stringList
  }

  const findLongestString = (stringList: string[]) => {
    stringList.sort((a, b) => b.length - a.length)
    return stringList[0]
  }

  if (strarr.length === 0 || k > strarr.length || k <= 0) return ''

  const stringList = generateStringList()
  return findLongestString(stringList)
}