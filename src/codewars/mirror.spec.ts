import { mirror } from './mirror'

describe('Mirror object - tcejbo rorriM', () => {
  it('應該要能正確鏡像單字屬性', () => {
    const input = {
      abc: '-',
      xyz: '-',
    }
    const expected = {
      abc: 'cba',
      xyz: 'zyx',
    }
    expect(mirror(input)).toEqual(expected)
  })

  it('應該要能正確處理迴文', () => {
    const input = {
      arara: '-',
      level: '-',
      wow: '-',
    }
    const expected = {
      arara: 'arara',
      level: 'level',
      wow: 'wow',
    }
    expect(mirror(input)).toEqual(expected)
  })

  it('鏡像時應該要保持原本的大小寫', () => {
    const input = {
      AbC: '-',
      XyZ: '-',
    }
    const expected = {
      AbC: 'CbA',
      XyZ: 'ZyX',
    }
    expect(mirror(input)).toEqual(expected)
  })

  it('應該要能處理空字串屬性', () => {
    const input = {
      '': '-',
    }
    const expected = {
      '': '',
    }
    expect(mirror(input)).toEqual(expected)
  })

  it('應該要能處理特殊字元', () => {
    const input = {
      'a@b#c': '-',
      '123': '-',
    }
    const expected = {
      'a@b#c': 'c#b@a',
      '123': '321',
    }
    expect(mirror(input)).toEqual(expected)
  })

  it('不應該修改到原始物件', () => {
    const input = {
      test: '-',
    }
    const originalInput = { ...input }
    mirror(input)
    expect(input).toEqual(originalInput)
  })

  it('應該要能處理多個相同值的屬性', () => {
    const input = {
      abc: '-',
      abc2: '-',
      cba: '-',
    }
    const expected = {
      abc: 'cba',
      abc2: '2cba',
      cba: 'abc',
    }
    expect(mirror(input)).toEqual(expected)
  })

  it('應該要能處理空物件', () => {
    const input = {}
    const expected = {}
    expect(mirror(input)).toEqual(expected)
  })
})
