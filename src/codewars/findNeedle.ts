export function findNeedle(haystack: string[]): string {
  const index = haystack.findIndex(s => s === 'needle')
  return index === -1 ? 'needle not found' : `found the needle at position ${index}`
}