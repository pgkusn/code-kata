export function humanYearsCatYearsDogYears(humanYears: number): [number, number, number] {
  const catYears = humanYears === 1 ? 15 : humanYears === 2 ? 24 : 24 + (humanYears - 2) * 4
  const dogYears = humanYears === 1 ? 15 : humanYears === 2 ? 24 : 24 + (humanYears - 2) * 5
  return [humanYears, catYears, dogYears]
}