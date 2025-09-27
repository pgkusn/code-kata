import { warnTheSheep } from './warnTheSheep'

describe("A wolf in sheep's clothing", () => {
  it('如傳入陣列中的 wolf 不在最後一個時，應回傳包含其所在陣列（反轉後）位置的指定字串', () => {
    const ary = ['sheep', 'sheep', 'sheep', 'wolf', 'sheep']
    expect(warnTheSheep(ary)).toBe('Oi! Sheep number 1! You are about to be eaten by a wolf!')
  })
  it('如傳入陣列中的 wolf 在最後一個時，應回傳指定字串', () => {
    const ary = ['sheep', 'sheep', 'wolf']
    expect(warnTheSheep(ary)).toBe('Pls go away and stop eating my sheep')
  })
})
