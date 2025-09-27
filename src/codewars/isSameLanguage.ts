export function isSameLanguage(list: Array<{ language: string }>): boolean {
  return list.every(item => item.language === list[0].language)
}