export function door(events: string): string {
  let output = ''
  let position = 0
  let isMoving = false
  let direction = 1

  const move = () => {
    position += direction
  }

  const changeDirection = () => {
    direction *= -1
  }

  const stopMoving = () => {
    isMoving = false
    changeDirection()
  }

  const toggle = () => {
    if (!isMoving) move()
    isMoving = !isMoving
  }

  const stop = () => {
    if (isMoving) {
      changeDirection()
      move()
    }
  }

  const noEvent = () => {
    if (isMoving) move()
  }

  const eventFn = {
    P: toggle,
    O: stop,
    '.': noEvent,
  }
  type EventKey = keyof typeof eventFn

  for (const e of events) {
    eventFn[e as EventKey]()
    output += position

    if ((isMoving && position === 0) || (isMoving && position === 5)) {
      stopMoving()
    }
  }

  return output
}
