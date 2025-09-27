import { correct } from './correct'

describe('Correct the mistakes of the character recognition software', () => {
  it('應將 5 替換為 S、0 替換為 O、1 替換為 I', () => {
    expect(correct('L0ND0N')).toBe('LONDON')
    expect(correct('DUBL1N')).toBe('DUBLIN')
    expect(correct('51NGAP0RE')).toBe('SINGAPORE')
    expect(correct('BUDAPE5T')).toBe('BUDAPEST')
    expect(correct('PAR15')).toBe('PARIS')
  })
})
