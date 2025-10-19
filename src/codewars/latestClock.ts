export function latestClock(a: number, b: number, c: number, d: number): string {
  const digits = [a, b, c, d].sort((x, y) => y - x)
  const used = [false, false, false, false]
  const result: number[] = []

  // 輔助函數：找到第一個符合條件且未使用的數字
  const findDigit = (predicate: (value: number) => boolean): number => {
    for (let i = 0; i < 4; i++) {
      if (!used[i] && predicate(digits[i])) {
        used[i] = true
        return digits[i]
      }
    }
    return -1 // 不應該發生（題目保證有效輸入）
  }

  // 1. 選擇小時十位：最大值 ≤ 2
  const hour1 = findDigit(v => v <= 2)
  result.push(hour1)

  // 2. 選擇小時個位：如果 hour1 === 2，最大值 ≤ 3；否則任意
  const hour2 = findDigit(v => (hour1 === 2 ? v <= 3 : true))
  result.push(hour2)

  // 3. 選擇分鐘十位：最大值 ≤ 5
  const min1 = findDigit(v => v <= 5)
  result.push(min1)

  // 4. 選擇分鐘個位：剩餘的數字
  const min2 = findDigit(() => true)
  result.push(min2)

  return `${result[0]}${result[1]}:${result[2]}${result[3]}`
}
