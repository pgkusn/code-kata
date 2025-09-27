export const sqInRect = (l: number, w: number): null | number[] => {
  if (l === w) return null

  const result: number[] = []

  const calc = (x: number, y: number) => {
    // 計算當前能夠切割出的最大的正方形邊長（取長度和寬度中的較小值）
    const min = Math.min(x, y)

    // 將該正方形的邊長新增到結果中
    result.push(min)

    // 根據哪一側剩餘空間更大，從那一側減去正方形的邊長
    const diff = Math.abs(x - y)

    // 繼續此過程，直到其中一側變為零
    if (x !== y) {
      calc(min, diff)
    }
  }

  calc(l, w)

  return result
}