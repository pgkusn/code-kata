import { bald } from './bald'

describe('Slaphead', () => {
  it('應返回替換後的頭部狀態和相應的評價', () => {
    expect(bald('/---------')).toStrictEqual(['----------', 'Unicorn!'])
    expect(bald('/-----/-')).toStrictEqual(['--------', 'Homer!'])
    expect(bald('--/--/---/-/---')).toStrictEqual(['---------------', 'Careless!'])
  })
})
