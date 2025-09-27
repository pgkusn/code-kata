export function decrypt(encryptedText: string | null, n: number) {
  if (!encryptedText) return encryptedText

  // 取前半部原字串的奇數索引，與後半部原字串的偶數索引，將兩者進行重組
  while (n > 0) {
    const oddEnd = Math.trunc(encryptedText.length / 2)
    const odd = encryptedText.slice(0, oddEnd)
    const even = encryptedText.slice(oddEnd)

    encryptedText = ''
    for (let i = 0; i < even.length; i++) {
      encryptedText += even[i]
      encryptedText += odd[i] ?? ''
    }

    n--
  }

  return encryptedText
}