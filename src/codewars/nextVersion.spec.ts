import { nextVersion } from './nextVersion'

describe('Next Version', function () {
  it('應正確遞增版本號', () => {
    expect(nextVersion('1.2.3')).toBe('1.2.4')
    expect(nextVersion('0.9.9')).toBe('1.0.0')
    expect(nextVersion('1')).toBe('2')
    expect(nextVersion('1.2.3.4.5.6.7.8')).toBe('1.2.3.4.5.6.7.9')
    expect(nextVersion('9.9')).toBe('10.0')
  })
})
