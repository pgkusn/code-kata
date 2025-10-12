---
description: '處理 Codewars 題目：翻譯成繁體中文、建立 TDD 環境、提供解題思路'
allowed-tools: ['ReadFile', 'WriteFile', 'ListDirectory', 'Bash(*)']
---

# Claude 命令：Codewars 題目設置

自動處理 Codewars 程式題目，包含翻譯、建立測試環境和解題指引。

## 使用方式

```
/codewars-setup
/codewars-setup [指定題目檔案路徑]
```

## 執行流程

此命令會依序執行以下步驟：

### 1. 讀取題目檔案

- 預設讀取專案根目錄的 `question.md`
- 或讀取你指定的題目檔案路徑

### 2. 翻譯題目為繁體中文

- 將整個題目內容翻譯成繁體中文
- 保留程式碼範例的原始格式
- 建立翻譯後的題目檔案，命名為 `[函式/類別名稱].md`

### 3. 建立 TDD 測試環境

根據題目提供的 Solution 建立以下檔案：

**實作檔案：** `[函式/類別名稱].ts`

- 包含空的函式或類別定義
- 無需實作任何程式細節

**測試檔案：** `[函式/類別名稱].spec.ts`

- 使用題目的原文標題作為測試情境描述
- 將所有測試案例翻譯成中文描述
- 包含題目提供的所有範例測試
- 使用 Vitest 測試框架與 Jest 斷言語法

### 4. 提供解題思路（Thinking）

輸出包含以下內容的解題分析：

**題目理解：**

- 輸入格式和資料類型
- 輸出要求
- 特殊限制或邊界條件

**解題策略：**

- 推薦的演算法或資料結構
- 時間複雜度和空間複雜度分析
- 可能的陷阱或需要注意的地方

**實作步驟：**

- 分步驟的實作建議
- 關鍵邏輯說明

**優化建議：**

- 初步解法
- 進階優化方向

## 檔案結構範例

執行命令後會產生：

```
src/codewars/
├── [functionName].md              # 翻譯後的題目
├── [functionName].ts              # 實作檔案（空函式）
└── [functionName].spec.ts         # 測試檔案（含中文描述）
```

## 測試檔案範例格式

```ts
// 假設函式名稱為 sumArray
describe('Sum Array', () => {
  // 使用原文標題
  it('應該正確計算陣列總和', () => {
    expect(sumArray([1, 2, 3])).toBe(6)
  })

  it('空陣列應該回傳 0', () => {
    expect(sumArray([])).toBe(0)
  })

  it('應該處理負數', () => {
    expect(sumArray([-1, -2, -3])).toBe(-6)
  })
})
```

## 注意事項

- 確保題目檔案格式正確且包含完整的 Solution 範例
- 如果無法判斷函式名稱，會提示你手動指定
- 生成的檔案會放在 `src/codewars/` 目錄，檔案名稱使用小駝峰式命名法

## 執行範例

```bash
# 使用預設路徑
/codewars-setup

# 指定特定題目
/codewars-setup src/codewars/two-sum.md
```
