export function multipleOfIndex(array: number[]): number[] {
  return array.filter((item, index) => (item === 0 ? true : item % index === 0))
}