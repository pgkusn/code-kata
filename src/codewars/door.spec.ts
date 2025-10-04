import { door } from './door'

describe('Killer Garage Door', () => {
  it('無事件時，門保持關閉', () => {
    expect(door('....')).toBe('0000')
  })

  it('按下按鈕後開始開門', () => {
    expect(door('P....')).toBe('01234')
  })

  it('延遲按下按鈕', () => {
    expect(door('..P....')).toBe('0012345')
  })

  it('按下按鈕後遇到障礙物立即反轉', () => {
    expect(door('..P...O.....')).toBe('001234321000')
  })

  it('門完全開啟後按按鈕開始關門', () => {
    expect(door('P.....P....')).toBe('01234543210')
  })

  it('移動中按按鈕會暫停', () => {
    expect(door('P.P....')).toBe('0112345')
  })

  it('暫停後再按按鈕繼續同方向移動', () => {
    expect(door('P.P.P..')).toBe('0112345')
  })

  it('關門時遇到障礙物立即反轉為開門', () => {
    expect(door('P.....P.O..')).toBe('01234543456')
  })

  it('複雜情境：多次暫停和障礙物', () => {
    expect(door('P.P.P..P.O..')).toBe('011234554321')
  })

  it('門完全關閉時再按按鈕開始開門', () => {
    expect(door('P.....P.....P....')).toBe('0123454321001234')
  })
})
