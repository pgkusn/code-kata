export function encrypt(text: string | null, n: number) {
  if (!text) return text

  while (n > 0) {
    const even = []
    const odd = []

    for (let i = 0; i < text.length; i++) {
      if (i % 2 === 0) {
        even.push(text[i])
      } else {
        odd.push(text[i])
      }
    }

    text = [...odd, ...even].join('')

    n--
  }

  return text
}