export function getParticipants(handshakes: number): number {
  let minPeople = 0
  while ((minPeople * (minPeople - 1)) / 2 < handshakes) {
    minPeople++
  }
  return minPeople
}