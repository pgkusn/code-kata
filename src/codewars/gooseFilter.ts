export function gooseFilter(birds: string[]): string[] {
  var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher']
  return birds.filter(item => !geese.includes(item))
}