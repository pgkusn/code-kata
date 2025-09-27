export function filterHomogenous(arrays: any[][]): any[][] {
  return arrays.filter(array => {
    const result = array.every(item => typeof item === typeof array[0])
    return array.length && result
  })
}