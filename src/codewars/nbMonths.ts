export function nbMonths(
  startPriceOld: number,
  startPriceNew: number,
  savingPerMonth: number,
  percentLossByMonth: number
): number[] {
  let month = 0
  let saving = 0
  let balance = startPriceOld - startPriceNew

  if (startPriceOld >= startPriceNew) return [0, Math.round(balance)]

  while (balance < 0) {
    month++

    // 計算折舊
    percentLossByMonth += month % 2 === 0 ? 0.5 : 0
    startPriceOld *= 1 - percentLossByMonth / 100
    startPriceNew *= 1 - percentLossByMonth / 100

    saving += savingPerMonth
    balance = saving + startPriceOld - startPriceNew
  }

  return [month, Math.round(balance)]
}