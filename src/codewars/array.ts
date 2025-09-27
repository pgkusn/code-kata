export function array(string: string): string | null {
  const arrayList = string.split(',')
  if (arrayList.length < 3) return null
  return arrayList.slice(1, arrayList.length - 1).join(' ')
}