export function diamondBurglar(locker: string[]): number {
  return (locker.join('.').match(/\*{1,2}/g) || []).length
}