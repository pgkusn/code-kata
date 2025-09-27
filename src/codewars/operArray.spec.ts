import { gcdi, lcmu, som, maxi, mini, operArray } from './operArray'

describe('Reducing by steps', () => {
  function testing(actual: any, expected: any) {
    expect(actual).toEqual(expected)
  }

  it('應該返回正確的結果', function () {
    let a = [18, 69, -90, -78, 65, 40]

    let r = [18, 3, 3, 3, 1, 1]
    let op = operArray(gcdi, a, a[0])
    testing(op, r)

    r = [18, 414, 2070, 26910, 26910, 107640]
    op = operArray(lcmu, a, a[0])
    testing(op, r)

    r = [18, 87, -3, -81, -16, 24]
    op = operArray(som, a, 0)
    testing(op, r)

    r = [18, 18, -90, -90, -90, -90]
    op = operArray(mini, a, a[0])
    testing(op, r)

    r = [18, 69, 69, 69, 69, 69]
    op = operArray(maxi, a, a[0])
    testing(op, r)
  })
})
