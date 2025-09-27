import { wave } from './wave'

describe('Mexican Wave', () => {
  let result: string[]

  it('應返回墨西哥波陣列', () => {
    result = ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']
    expect(wave('hello')).toEqual(result)

    result = [
      'Codewars',
      'cOdewars',
      'coDewars',
      'codEwars',
      'codeWars',
      'codewArs',
      'codewaRs',
      'codewarS',
    ]
    expect(wave('codewars')).toEqual(result)

    result = []
    expect(wave('')).toEqual(result)

    result = [
      'Two words',
      'tWo words',
      'twO words',
      'two Words',
      'two wOrds',
      'two woRds',
      'two worDs',
      'two wordS',
    ]
    expect(wave('two words')).toEqual(result)

    result = [' Gap ', ' gAp ', ' gaP ']
    expect(wave(' gap ')).toEqual(result)
  })
})
