export function likes(names: string[]): string {
  const [name1, name2, ...others] = names

  switch (names.length) {
    case 0:
      return 'no one likes this'
    case 1:
      return `${name1} likes this`
    case 2:
      return `${name1} and ${name2} like this`
    case 3:
      return `${name1}, ${name2} and ${others[0]} like this`
    default:
      return `${name1}, ${name2} and ${others.length} others like this`
  }
}