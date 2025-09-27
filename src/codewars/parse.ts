export function parse(data: string): number[] {
  let count = 0

  const command = {
    i() {
      count += 1
    },
    d() {
      count -= 1
    },
    s() {
      count *= count
    },
  }

  return [...data].reduce((prev: number[], curr) => {
    if (curr in command) {
      command[curr as keyof typeof command]()
    }

    if (curr === 'o') {
      prev.push(count)
    }

    return prev
  }, [])
}