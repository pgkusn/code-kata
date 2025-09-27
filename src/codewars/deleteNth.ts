export function deleteNth(arr: number[], n: number) {
  return arr.reduce((acc: number[], cur) => {
    const count = acc.filter(n => n === cur).length
    if (count < n) acc.push(cur)
    return acc
  }, [])
}