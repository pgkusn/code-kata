export function uefaEuro2016(teams: string[], scores: number[]): string {
  const title = `At match ${teams[0]} - ${teams[1]}, `
  const max = Math.max(...scores)
  const min = Math.min(...scores)
  const winner = teams[scores.findIndex(n => n === max)]
  const result = max === min ? 'teams played draw.' : `${winner} won!`
  return title + result
}