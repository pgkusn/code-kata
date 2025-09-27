import { flickSwitch } from './flickSwitch'

describe('Flick Switch', function () {
  it('應返回正確的值', function () {
    expect(flickSwitch(['codewars', 'flick', 'code', 'wars'])).toEqual([
      true,
      false,
      false,
      false,
    ])
    expect(flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine'])).toEqual([
      false,
      false,
      false,
      false,
    ])
    expect(flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick'])).toEqual([
      true,
      true,
      false,
      false,
      true,
    ])
    expect(flickSwitch(['flick', 'flick', 'flick', 'flick', 'flick'])).toEqual([
      false,
      true,
      false,
      true,
      false,
    ])
    expect(flickSwitch(['bicycle'])).toEqual([true])
    expect(flickSwitch(['flick'])).toEqual([false])
    expect(flickSwitch([])).toEqual([])
  })
})
