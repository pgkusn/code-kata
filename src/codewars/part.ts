export function part(x: string[]): string {
  const keywords = [
    'Partridge',
    'PearTree',
    'Chat',
    'Dan',
    'Toblerone',
    'Lynn',
    'AlphaPapa',
    'Nomad',
  ]
  const marks = x.reduce((previous, current) => {
    return previous + (keywords.includes(current) ? '!' : '')
  }, '')
  return marks ? `Mine's a Pint${marks}` : "Lynn, I've pierced my foot on a spike!!"
}