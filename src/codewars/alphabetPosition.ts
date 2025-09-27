export function alphabetPosition(text: string): string {
  const alphabets = text.match(/([A-Za-z])/g) ?? []
  return alphabets.map(s => s.toLocaleLowerCase().charCodeAt(0) - 96).join(' ')
}