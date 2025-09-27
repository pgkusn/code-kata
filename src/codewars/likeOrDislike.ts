export function likeOrDislike(buttons: string[]): string {
  return buttons.reduce((previous, current) => {
    return previous === current ? 'Nothing' : current
  }, 'Nothing')
}