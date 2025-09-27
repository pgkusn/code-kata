import { countSmileys } from './countSmileys'

describe('Count the smiley faces!', () => {
  it('應返回笑臉表情符號的數量', () => {
    expect(countSmileys([])).toBe(0)
    expect(countSmileys([':D', ':~)', ';~D', ':)'])).toBe(4)
    expect(countSmileys([':)', ':(', ':D', ':O', ':;'])).toBe(2)
    expect(countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1)
  })
})
