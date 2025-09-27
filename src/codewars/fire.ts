export function fire(x: number, y: number): string {
  const areaX = ['left', 'middle', 'right'][x]
  const areaY = ['top', 'middle', 'bottom'][y]
  return areaX === areaY ? 'center' : `${areaY} ${areaX}`
}