import { rot, selfieAndRot, oper } from './squaredStrings'

describe('Moves in squared strings (II)', () => {
  describe('rot 函數測試', () => {
    it('應該將字串旋轉 180 度', () => {
      const s = 'abcd\nefgh\nijkl\nmnop'
      expect(rot(s)).toBe('ponm\nlkji\nhgfe\ndcba')
    })

    it('應該處理單行字串', () => {
      const s = 'abcd'
      expect(rot(s)).toBe('dcba')
    })
  })

  describe('selfieAndRot 函數測試', () => {
    it('應該將原字串與旋轉後字串組合，並在中間加上對應數量的點', () => {
      const s = 'abcd\nefgh\nijkl\nmnop'
      const expected =
        'abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba'
      expect(selfieAndRot(s)).toBe(expected)
    })

    it('應該處理單行字串並加上點與旋轉後的版本', () => {
      const s = 'abcd'
      const expected = 'abcd....\n....dcba'
      expect(selfieAndRot(s)).toBe(expected)
    })
  })

  describe('oper 高階函數測試', () => {
    it('應該對字串應用 rot 函數', () => {
      const s = 'abcd\nefgh\nijkl\nmnop'
      expect(oper(rot, s)).toBe('ponm\nlkji\nhgfe\ndcba')
    })

    it('應該對字串應用 selfieAndRot 函數', () => {
      const s = 'abcd\nefgh\nijkl\nmnop'
      const expected =
        'abcd....\nefgh....\nijkl....\nmnop....\n....ponm\n....lkji\n....hgfe\n....dcba'
      expect(oper(selfieAndRot, s)).toBe(expected)
    })
  })
})
