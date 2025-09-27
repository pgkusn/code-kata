import { binRota } from './binRota'

describe('The Lazy Startup Office', () => {
  it('應返回正確的輪值名單', () => {
    expect(
      binRota([
        ['Bob', 'Nora'],
        ['Ruby', 'Carl'],
      ])
    ).toStrictEqual(['Bob', 'Nora', 'Carl', 'Ruby'])
    expect(binRota([['Billy']])).toStrictEqual(['Billy'])
    expect(binRota([['Billy', 'Nancy']])).toStrictEqual(['Billy', 'Nancy'])
    expect(binRota([['Billy'], ['Megan'], ['Aki'], ['Arun'], ['Joy']])).toStrictEqual([
      'Billy',
      'Megan',
      'Aki',
      'Arun',
      'Joy',
    ])
    expect(
      binRota([
        ['Sam', 'Nina', 'Tim', 'Helen', 'Gurpreet', 'Edward', 'Holly', 'Eliza'],
        ['Billy', 'Megan', 'Aki', 'Arun', 'Joy', 'Anish', 'Lee', 'Maryan'],
        ['Nick', 'Josh', 'Pete', 'Kavita', 'Daisy', 'Francesca', 'Alfie', 'Macy'],
      ])
    ).toStrictEqual([
      'Sam',
      'Nina',
      'Tim',
      'Helen',
      'Gurpreet',
      'Edward',
      'Holly',
      'Eliza',
      'Maryan',
      'Lee',
      'Anish',
      'Joy',
      'Arun',
      'Aki',
      'Megan',
      'Billy',
      'Nick',
      'Josh',
      'Pete',
      'Kavita',
      'Daisy',
      'Francesca',
      'Alfie',
      'Macy',
    ])
    expect(
      binRota([
        ['Stefan', 'Raj', 'Marie'],
        ['Alexa', 'Amy', 'Edward'],
        ['Liz', 'Claire', 'Juan'],
        ['Dee', 'Luke', 'Elle'],
      ])
    ).toStrictEqual([
      'Stefan',
      'Raj',
      'Marie',
      'Edward',
      'Amy',
      'Alexa',
      'Liz',
      'Claire',
      'Juan',
      'Elle',
      'Luke',
      'Dee',
    ])
  })
})
