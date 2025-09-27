type matrix = number[][]

export function matrixAddition(a: matrix, b: matrix): matrix {
  return a.map((row, i) => row.map((value, j) => value + b[i][j]))
}