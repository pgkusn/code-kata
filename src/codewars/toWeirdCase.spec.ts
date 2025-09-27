import { toWeirdCase } from './toWeirdCase'

describe('WeIrD StRiNg CaSe', () => {
  function doTest(input: string, expected: string): void {
    const actual = toWeirdCase(input)
    expect(actual).toBe(expected)
  }

  it('應返回正確的字串', () => {
    doTest('This is a test', 'ThIs Is A TeSt')
    doTest('', '')
    doTest('unique', 'UnIqUe')
    doTest('UPPER CASE', 'UpPeR CaSe')
    doTest('lower case', 'LoWeR CaSe')
  })
})
