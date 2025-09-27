import { fish } from './fish';

describe('Plenty of Fish in the Pond', () => {
  it('應該能夠計算魚吃掉其他魚後的最終體型 - 範例 1', () => {
    expect(fish("11112222")).toBe(3);
  });

  it('應該能夠計算魚吃掉其他魚後的最終體型 - 範例 2', () => {
    expect(fish("111111111111")).toBe(3);
  });

  it('當沒有魚時應該返回起始體型 1', () => {
    expect(fish("")).toBe(1);
  });

  it('當只有藻類時應該返回起始體型 1', () => {
    expect(fish("0000")).toBe(1);
  });

  it('當只有一條大小 1 的魚時應該保持體型 1', () => {
    expect(fish("1")).toBe(1);
  });

  it('當有足夠大小 1 的魚時應該能增長到體型 2', () => {
    expect(fish("1111")).toBe(2);
  });

  it('當魚的大小超過當前體型時不能被吃掉', () => {
    expect(fish("9")).toBe(1);
  });

  it('應該能正確處理混合大小的魚群', () => {
    expect(fish("1234")).toBe(2);
  });
});