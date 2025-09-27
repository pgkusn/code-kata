import { getParticipants } from './getParticipants'

describe('Handshake problem', () => {
  it('should return 0 if no handshakes', () => {
    expect(getParticipants(0)).toBe(0)
  })

  it('should return 2 when there is 1 handshake', () => {
    expect(getParticipants(1)).toBe(2)
  })

  it('should return 3 when there are 3 handshakes', () => {
    expect(getParticipants(3)).toBe(3)
  })

  it('should return 4 when there are 5 handshakes', () => {
    expect(getParticipants(5)).toBe(4)
  })

  it('should return 4 when there are 6 handshakes', () => {
    expect(getParticipants(6)).toBe(4)
  })

  it('should return 5 when there are 7 handshakes', () => {
    expect(getParticipants(7)).toBe(5)
  })
})
