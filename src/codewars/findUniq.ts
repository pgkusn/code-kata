export function findUniq(arr: number[]): number | undefined {
  const counts = arr.reduce((acc: { [key: string]: number }, cur) => {
    if (!acc[cur]) acc[cur] = 0
    acc[cur]++
    return acc
  }, {})

  return arr.find(n => counts[n] === 1)

  // better
  // arr = arr.sort()
  // return arr[0] == arr[1] ? arr[arr.length - 1] : arr[0]
}