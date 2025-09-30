export function fish(shoal: string): number {
  let currentSize = 1
  let eatenFish = 0

  const sortedFish = [...shoal].sort((a, b) => Number(a) - Number(b))

  for (const f of sortedFish) {
    const fishSize = Number(f)

    if (currentSize < fishSize) continue

    eatenFish += fishSize
    const target = currentSize * 4

    if (eatenFish >= target) {
      currentSize++
      eatenFish -= target
    }
  }

  return currentSize
}
