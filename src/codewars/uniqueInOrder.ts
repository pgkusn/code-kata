export function uniqueInOrder(iterable: string | (string | number)[]): (string | number)[] {
  return [...iterable].reduce((acc: (string | number)[], cur, index, array) => {
    if (array[index - 1] !== cur) {
      acc.push(cur)
    }
    return acc
  }, [])

  // better
  // return [...iterable].filter((x, i) => x != iterable[i - 1])
}