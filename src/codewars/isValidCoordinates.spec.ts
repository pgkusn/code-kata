import { isValidCoordinates } from './isValidCoordinates'

describe('Coordinates Validator', () => {
  // 題目提供的有效案例
  it.each([
    ['-23, 25'],
    ['24.53525235, 23.45235'],
    ['04, -23.234235'],
    ['43.91343345, 143'],
    ['4, -3'],
  ])('valid coordinates: %s', coords => {
    expect(isValidCoordinates(coords)).toBe(true)
  })

  // 題目提供的無效案例
  it.each([
    ['23.234, - 23.4234'],
    ['2342.43536, 34.324236'],
    ['N23.43345, E32.6457'],
    ['99.234, 12.324'],
    ['6.325624, 43.34345.345'],
    ['0, 1,2'],
    ['0.342q0832, 1.2324'],
  ])('invalid coordinates: %s', coords => {
    expect(isValidCoordinates(coords)).toBe(false)
  })

  // 額外邊界測試
  it.each([
    ['90, 0'], // 最大緯度
    ['-90, 0'], // 最小緯度
    ['0, 180'], // 最大經度
    ['0, -180'], // 最小經度
    ['0, 0'], // 原點
    ['90.0, 180.0'], // 邊界含小數
    ['-0.0, -0.0'], // 負零
  ])('valid edge cases: %s', coords => {
    expect(isValidCoordinates(coords)).toBe(true)
  })

  it.each([
    ['90.0001, 0'], // 超過緯度範圍
    ['-90.1, 0'], // 超過緯度範圍
    ['0, 180.0001'], // 超過經度範圍
    ['0, -180.1'], // 超過經度範圍
    ['+23, 45'], // 含 + 號（題目未允許）
    ['23,, 45'], // 多逗號
    ['23 45'], // 缺逗號
  ])('invalid edge cases: %s', coords => {
    expect(isValidCoordinates(coords)).toBe(false)
  })
})
