import { mazeRunner } from './mazeRunner'

describe('Maze Runner', function () {
  const maze = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 3],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 0, 1, 0, 1],
  ]

  it('應該正確運行迷宮', () => {
    expect(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E'])).toBe('Finish')
    expect(
      mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'E', 'E', 'N', 'N', 'E'])
    ).toBe('Finish')
    expect(mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'W', 'W'])).toBe(
      'Finish'
    )

    expect(mazeRunner(maze, ['N', 'N', 'N', 'W', 'W'])).toBe('Dead')
    expect(
      mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'S', 'S', 'S', 'S'])
    ).toBe('Dead')

    expect(mazeRunner(maze, ['N', 'E', 'E', 'E', 'E'])).toBe('Lost')
  })
})
