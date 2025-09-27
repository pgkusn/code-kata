export function Mormons(startingNumber: number, reach: number, target: number): number {
  if (startingNumber >= target) return 0

  let result = 0
  let currentTarget = startingNumber

  const preach = () => {
    result++
    currentTarget += currentTarget * reach

    if (currentTarget < target) preach()
  }
  preach()

  return result
}