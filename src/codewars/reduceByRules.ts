type RuleFunction = (a: number, b: number) => number

export function reduceByRules(numbers: number[], rules: RuleFunction[]): number {
  return numbers.reduce((prev, curr, index) => {
    const ruleFn = rules[(index - 1) % rules.length]
    return ruleFn(prev, curr)
  })
}