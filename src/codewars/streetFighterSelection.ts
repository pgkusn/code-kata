export function streetFighterSelection(
  fighters: string[][],
  position: number[],
  moves: ('down' | 'up' | 'right' | 'left')[]
) {
  let [x, y] = position

  const controls = {
    up() {
      x = 0
    },
    down() {
      x = 1
    },
    right() {
      y = y < 5 ? y + 1 : 0
    },
    left() {
      y = y > 0 ? y - 1 : 5
    },
  }

  return moves.reduce((prev: string[], curr) => {
    controls[curr]()
    prev.push(fighters[x][y])
    return prev
  }, [])
}