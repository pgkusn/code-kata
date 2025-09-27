import { catalog } from './catalog'

describe('Catalog', () => {
  const s = `<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>

<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>

<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>

<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>

<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>`

  it('應該能找到單一產品並正確格式化輸出', () => {
    expect(catalog(s, 'hammer')).toBe('hammer > prx: $10 qty: 50')
  })

  it('應該能找到多個符合的產品並正確換行輸出', () => {
    expect(catalog(s, 'saw')).toBe('table saw > prx: $1099.99 qty: 5\nsaw > prx: $9 qty: 10')
  })

  it("當找不到產品時應該回傳 'Nothing'", () => {
    expect(catalog(s, 'wrench')).toBe('Nothing')
  })

  it("應該支援查詢子字串（例如 'screw'）並返回正確結果", () => {
    expect(catalog(s, 'screw')).toBe('screwdriver > prx: $5 qty: 51')
  })

  it('應該保持與輸入 catalog 中出現順序一致', () => {
    // 這裡檢查 'drill' 與 'hammer' 是否照原本順序輸出
    expect(catalog(s, 'r')).toBe(
      'drill > prx: $99 qty: 5\nhammer > prx: $10 qty: 50\nscrewdriver > prx: $5 qty: 51'
    )
  })
})
