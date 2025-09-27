export function duckDuckGoose(players: { name: string }[], goose: number): string {
  return players[(goose - 1) % players.length].name
}