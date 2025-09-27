import { vowelBack } from './vowelBack'

describe('Vowels Back', () => {
  it('vowelBack 應正確轉換字串', () => {
    expect(vowelBack('testcase')).toBe('tabtbvba')
    expect(vowelBack('codewars')).toBe('bnaafvab')
    expect(vowelBack('exampletesthere')).toBe('agvvyuatabtqaaa')
    expect(vowelBack('returnofthespacecamel')).toBe('aatpawnftqabyvbabvvau')
    expect(vowelBack('bringonthebootcamp')).toBe('kaiwpnwtqaknntbvvy')
    expect(vowelBack('weneedanofficedog')).toBe('fawaaavwnffibaanp')
  })
})
