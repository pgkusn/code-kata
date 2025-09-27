import * as R from 'ramda'

export function isValidCoordinates(coordinates: string): boolean {
  const regex = /^-?\d+(?:\.\d+)?, -?\d+(?:\.\d+)?$/
  if (!regex.test(coordinates)) return false

  const isValid = ([lat, lon]: number[]) => lat <= 90 && lon <= 180
  return R.pipe(R.split(', '), R.map(R.pipe(Number, Math.abs)), isValid)(coordinates)
}