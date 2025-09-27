export function longestCommonPrefix(strs: string[]): string {
  let result = ''

  for (let i = 0; i < strs[0].length; i++) {
    let chars = ''

    for (const str of strs) {
      chars += str[i]
    }

    if (chars !== chars[0].repeat(strs.length)) break

    result += chars[0]
  }

  return result
}