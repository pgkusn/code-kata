export function maxBall(v0: number): number {
  const speed = v0 * (1000 / 3600)
  let t = 0
  let h = -Infinity

  const getHeight = (t: number, speed: number) => speed * t - 0.5 * 9.81 * t ** 2

  const updateHeight = () => {
    const nextHeight = getHeight((t + 1) * 0.1, speed)
    if (nextHeight < h) return

    t++
    h = nextHeight

    updateHeight()
  }

  updateHeight()

  return t
}