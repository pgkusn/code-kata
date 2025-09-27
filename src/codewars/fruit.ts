export function fruit(reels: string[][], spins: number[]): number {
  interface Counts {
    [key: string]: number
  }
  interface Scoring {
    [key: string]: Counts
  }

  const scoring: Scoring = {
    Wild: { 3: 100, 2: 10 },
    Star: { 3: 90, 2: 9 },
    Bell: { 3: 80, 2: 8 },
    Shell: { 3: 70, 2: 7 },
    Seven: { 3: 60, 2: 6 },
    Cherry: { 3: 50, 2: 5 },
    Bar: { 3: 40, 2: 4 },
    King: { 3: 30, 2: 3 },
    Queen: { 3: 20, 2: 2 },
    Jack: { 3: 10, 2: 1 },
  }

  const getCounts = () => {
    const counts: Counts = {}

    for (let i = 0; i < spins.length; i++) {
      const reelIndex = spins[i]
      const reelItem = reels[i][reelIndex]

      if (counts[reelItem]) {
        counts[reelItem]++
      } else {
        counts[reelItem] = 1
      }
    }

    return counts
  }

  const getTotalScore = (counts: Counts) => {
    let totalScore = Object.keys(counts).reduce((prev, key) => {
      const score = scoring[key][counts[key]] ?? 0
      return prev + score
    }, 0)

    // double score
    if (Object.keys(counts).length === 2 && counts.Wild === 1) {
      totalScore *= 2
    }

    return totalScore
  }

  return getTotalScore(getCounts())
}