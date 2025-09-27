import { revRot } from './revRot'

describe('Reverse or rotate?', function () {
  it('應返回正確的字串', function () {
    expect(revRot('1234', 0)).toBe('')
    expect(revRot('', 0)).toBe('')
    expect(revRot('1234', 5)).toBe('')
    expect(revRot('123456987654', 6)).toBe('234561876549')
    expect(revRot('733049910872815764', 5)).toBe('330479108928157')
  })
})
