import { lastSurvivors } from './lastSurvivors'

describe('Last Survivors Ep.2', () => {
  it('應該處理基本的情況', () => {
    expect(lastSurvivors('abaa').split('').sort().join('')).toBe('ac')
  })

  it('應該處理包含 z 的情況', () => {
    expect(lastSurvivors('zzab').split('').sort().join('')).toBe('c')
  })

  it('應該處理空字串', () => {
    expect(lastSurvivors('').split('').sort().join('')).toBe('')
  })

  it('應該處理長字串', () => {
    expect(
      lastSurvivors(
        'xsdlafqpcmjytoikojsecamgdkehrqqgfknlhoudqygkbxftivfbpxhxtqgpkvsrfflpgrlhkbfnyftwkdebwfidmpauoteahyh'
      )
        .split('')
        .sort()
        .join('')
    ).toBe('acdeghlmnqrvyz')
  })
})
