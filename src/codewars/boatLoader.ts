export function boatLoader(input: (string | number)[]): [string, string][] {
  const animals: Record<string, string | null> = input.reduce((previous, current) => {
    const obj: Record<string, string | null> = {}
    obj[current.toString()] = current.toString() in previous ? current.toString() : null
    return {
      ...previous,
      ...obj,
    }
  }, {} as Record<string, string | null>)

  // 移除單數個的項目與數字
  for (let animal in animals) {
    if (!animals[animal] || !isNaN(Number(animals[animal]))) {
      delete animals[animal]
    }
  }

  // 按字母順序排列、大寫在小寫前面
  const result = Object.entries(animals).sort(([a], [b]) => {
    return a.localeCompare(b, 'en-US-u-kf-upper')
  })

  return result as [string, string][]
}