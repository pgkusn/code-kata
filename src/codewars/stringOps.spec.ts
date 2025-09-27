import { stringOps } from './stringOps'

describe('Moves in squared strings (III)', () => {
  const ops = stringOps()

  const sample = 'abcd\nefgh\nijkl\nmnop'

  it('應該能正確做主對角線對稱 (diag1Sym)', () => {
    const result = ops.diag1Sym(sample)
    expect(result).toBe('aeim\nbfjn\ncgko\ndhlp')
  })

  it('應該能正確做順時針旋轉90度 (rot90Clock)', () => {
    const result = ops.rot90Clock(sample)
    expect(result).toBe('miea\nnjfb\nokgc\nplhd')
  })

  it('應該能正確輸出 selfie 與主對角線 (selfieAndDiag1)', () => {
    const result = ops.selfieAndDiag1(sample)
    expect(result).toBe('abcd|aeim\n' + 'efgh|bfjn\n' + 'ijkl|cgko\n' + 'mnop|dhlp')
  })

  it('應該能透過 oper 套用指定的函式', () => {
    const result = ops.oper(ops.rot90Clock, sample)
    expect(result).toBe('miea\nnjfb\nokgc\nplhd')
  })
})
