export function digitize(n: number): number[] {
  return Array.from(String(n), Number).reverse()
}