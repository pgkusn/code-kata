export function getCount(str: string): number {
  let vowelCount = 0
  const vowels = ['a', 'e', 'i', 'o', 'u']

  for (const s of str) {
    if (vowels.includes(s)) {
      vowelCount++
    }
  }

  return vowelCount
}