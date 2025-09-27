export function mazeRunner(maze: number[][], directions: string[]): string {
  const findStartPoint = (arr: number[][]) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === 2) {
          return [i, j]
        }
      }
    }
    return [0, 0]
  }

  let [y, x] = findStartPoint(maze)

  const moves = {
    N() {
      y -= 1
    },
    E() {
      x += 1
    },
    W() {
      x -= 1
    },
    S() {
      y += 1
    },
  }

  for (let i = 0; i < directions.length; i++) {
    const move = directions[i] as keyof typeof moves
    moves[move]()

    if (maze[y]?.[x] === undefined || maze[y][x] === 1) return 'Dead'
    if (maze[y][x] === 3) return 'Finish'
  }

  return 'Lost'
}