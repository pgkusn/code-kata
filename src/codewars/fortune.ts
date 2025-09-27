export function fortune(f0: number, p: number, c0: number, n: number, i: number): boolean {
  let deposit = f0
  let expenses = c0

  for (let year = 1; year <= n; year++) {
    deposit = Math.trunc(deposit + deposit * (p / 100) - expenses)
    if (deposit < 0) return false
    expenses = Math.trunc(expenses + expenses * (i / 100))
  }

  return true
}