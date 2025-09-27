export function multiplicationTable(size: number): number[][] {
  const rows = []

  for (let i = 1; i <= size; i++) {
    const row = []
    for (let j = 1; j <= size; j++) {
      row.push(i * j)
    }
    rows.push(row)
  }

  return rows
}