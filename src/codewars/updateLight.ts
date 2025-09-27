export function updateLight(current: string): string {
  const lights = ['red', 'green', 'yellow']
  const currentIndex = lights.findIndex(item => item === current)
  return lights[(currentIndex + 1) % lights.length]
}