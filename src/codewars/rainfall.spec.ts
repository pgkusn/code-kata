import { mean, variance } from './rainfall'

describe('Rainfall', () => {
  const sampleData = `
London:Jan 48.0,Feb 38.9,Mar 39.9,Apr 42.2,May 47.3,Jun 52.1,Jul 59.5,Aug 57.2,Sep 55.4,Oct 62.0,Nov 59.0,Dec 52.9
Paris:Jan 182.3,Feb 120.6,Mar 158.1,Apr 204.9,May 323.1,Jun 300.5,Jul 236.8,Aug 192.9,Sep 66.3,Oct 63.3,Nov 83.2,Dec 154.7
`.trim()

  it('應正確計算 London 的平均值', () => {
    const result = mean('London', sampleData)
    expect(result).toBeCloseTo(51.199999999999996, 4)
  })

  it('應正確計算 London 的變異數', () => {
    const result = variance('London', sampleData)
    expect(result).toBeCloseTo(57.42833333333374, 4)
  })

  it('查無城市時，平均值應為 -1', () => {
    expect(mean('NoCity', sampleData)).toBe(-1)
  })

  it('查無城市時，變異數應為 -1', () => {
    expect(variance('NoCity', sampleData)).toBe(-1)
  })
})
