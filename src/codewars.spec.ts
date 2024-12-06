import * as fn from './codewars'

describe('Sorting on planet Twisted-3-7', function () {
  it('應該正確排序扭曲的3和7', function () {
    expect(fn.sortTwisted37([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 2, 7, 4, 5, 6, 3, 8, 9])
    expect(fn.sortTwisted37([12, 13, 14])).toEqual([12, 14, 13])
    expect(fn.sortTwisted37([9, 2, 4, 7, 3])).toEqual([2, 7, 4, 3, 9])
    expect(fn.sortTwisted37([-13, -19, -22, -27, -28, -5])).toEqual([-28, -27, -22, -19, -13, -5])
  })
})

describe('Fruit Machine', () => {
  let reel, reel1, reel2, reel3, spin

  it('應該正確計算獎勵', () => {
    reel = ['Wild', 'Star', 'Bell', 'Shell', 'Seven', 'Cherry', 'Bar', 'King', 'Queen', 'Jack']
    spin = [0, 0, 0]
    expect(fn.fruit([reel, reel, reel], spin)).toBe(100)

    reel1 = ['Wild', 'Star', 'Bell', 'Shell', 'Seven', 'Cherry', 'Bar', 'King', 'Queen', 'Jack']
    reel2 = ['Bar', 'Wild', 'Queen', 'Bell', 'King', 'Seven', 'Cherry', 'Jack', 'Star', 'Shell']
    reel3 = ['Bell', 'King', 'Wild', 'Bar', 'Seven', 'Jack', 'Shell', 'Cherry', 'Queen', 'Star']
    spin = [5, 4, 3]
    expect(fn.fruit([reel1, reel2, reel3], spin)).toBe(0)

    reel1 = ['King', 'Cherry', 'Bar', 'Jack', 'Seven', 'Queen', 'Star', 'Shell', 'Bell', 'Wild']
    reel2 = ['Bell', 'Seven', 'Jack', 'Queen', 'Bar', 'Star', 'Shell', 'Wild', 'Cherry', 'King']
    reel3 = ['Wild', 'King', 'Queen', 'Seven', 'Star', 'Bar', 'Shell', 'Cherry', 'Jack', 'Bell']
    spin = [0, 0, 1]
    expect(fn.fruit([reel1, reel2, reel3], spin)).toBe(3)

    reel1 = ['King', 'Jack', 'Wild', 'Bell', 'Star', 'Seven', 'Queen', 'Cherry', 'Shell', 'Bar']
    reel2 = ['Star', 'Bar', 'Jack', 'Seven', 'Queen', 'Wild', 'King', 'Bell', 'Cherry', 'Shell']
    reel3 = ['King', 'Bell', 'Jack', 'Shell', 'Star', 'Cherry', 'Queen', 'Bar', 'Wild', 'Seven']
    spin = [0, 5, 0]
    expect(fn.fruit([reel1, reel2, reel3], spin)).toBe(6)
  })
})

describe('Primorial Of a Number', () => {
  it('應該計算正確的質數乘積', () => {
    expect(fn.numPrimorial(3)).toBe(30) // 2 * 3 * 5 = 30
    expect(fn.numPrimorial(4)).toBe(210)
    expect(fn.numPrimorial(5)).toBe(2310) // 2 * 3 * 5 * 7 * 11 = 2310
    expect(fn.numPrimorial(8)).toBe(9699690)
    expect(fn.numPrimorial(9)).toBe(223092870)
  })
})

describe('Maze Runner', function () {
  const maze = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 3],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 0, 1, 0, 1],
  ]

  it('應該正確運行迷宮', () => {
    expect(fn.mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E'])).toBe('Finish')
    expect(
      fn.mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'E', 'E', 'N', 'N', 'E'])
    ).toBe('Finish')
    expect(fn.mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'E', 'E', 'E', 'W', 'W'])).toBe(
      'Finish'
    )

    expect(fn.mazeRunner(maze, ['N', 'N', 'N', 'W', 'W'])).toBe('Dead')
    expect(
      fn.mazeRunner(maze, ['N', 'N', 'N', 'N', 'N', 'E', 'E', 'S', 'S', 'S', 'S', 'S', 'S'])
    ).toBe('Dead')

    expect(fn.mazeRunner(maze, ['N', 'E', 'E', 'E', 'E'])).toBe('Lost')
  })
})

describe('Length of missing array', function () {
  it('應該正確計算缺失數組的長度', () => {
    expect(fn.getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])).toBe(3)
    expect(fn.getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])).toBe(2)
    expect(fn.getLengthOfMissingArray([[null], [null, null, null]])).toBe(2)
    expect(
      fn.getLengthOfMissingArray([
        ['a', 'a', 'a'],
        ['a', 'a'],
        ['a', 'a', 'a', 'a'],
        ['a'],
        ['a', 'a', 'a', 'a', 'a', 'a'],
      ])
    ).toBe(5)
    expect(fn.getLengthOfMissingArray([])).toBe(0)
    expect(fn.getLengthOfMissingArray([[], [1], [2, 3, 3]])).toBe(0)
    expect(fn.getLengthOfMissingArray(null)).toBe(0)
    expect(fn.getLengthOfMissingArray([null, []])).toBe(0)
  })
})

describe('Matrix Addition', () => {
  it('應該正確地將兩個1x1矩陣相加', () => {
    expect(fn.matrixAddition([[1]], [[2]])).toEqual([[3]])
  })

  it('應該正確地將兩個2x2矩陣相加', () => {
    expect(
      fn.matrixAddition(
        [
          [1, 2],
          [1, 2],
        ],
        [
          [2, 3],
          [2, 3],
        ]
      )
    ).toEqual([
      [3, 5],
      [3, 5],
    ])
  })

  it('應該正確地將兩個3x3矩陣相加', () => {
    expect(
      fn.matrixAddition(
        [
          [1, 2, 3],
          [3, 2, 1],
          [1, 1, 1],
        ],
        [
          [2, 2, 1],
          [3, 2, 3],
          [1, 1, 3],
        ]
      )
    ).toEqual([
      [3, 4, 4],
      [6, 4, 4],
      [2, 2, 4],
    ])
  })
})

describe('Dashatize it', () => {
  it('應該正確處理正整數', () => {
    expect(fn.dashatize(274)).toBe('2-7-4')
    expect(fn.dashatize(5311)).toBe('5-3-1-1')
    expect(fn.dashatize(86320)).toBe('86-3-20')
    expect(fn.dashatize(974302)).toBe('9-7-4-3-02')
  })

  it('應該正確處理零和負數', () => {
    expect(fn.dashatize(0)).toBe('0')
    expect(fn.dashatize(-1)).toBe('1')
    expect(fn.dashatize(-28369)).toBe('28-3-6-9')
  })
})

describe('Street Fighter 2 - Character Selection', () => {
  type Move = 'down' | 'up' | 'right' | 'left'

  const fighters: string[][] = [
    ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
    ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison'],
  ]
  const opts: Move[] = ['up', 'down', 'right', 'left']
  let moves: Move[] = []

  describe('街頭霸王2 - 角色選擇', () => {
    it('應該能處理少量移動', () => {
      moves = ['up', 'left', 'right', 'left', 'left']
      expect(fn.streetFighterSelection(fighters, [0, 0], moves)).toEqual([
        'Ryu',
        'Vega',
        'Ryu',
        'Vega',
        'Balrog',
      ])
    })

    it('應該能處理沒有選擇游標移動的情況', () => {
      moves = []
      expect(fn.streetFighterSelection(fighters, [0, 0], moves)).toEqual([])
    })

    it('應該能處理一直向左移動的情況', () => {
      moves = ['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left']
      expect(fn.streetFighterSelection(fighters, [0, 0], moves)).toEqual([
        'Vega',
        'Balrog',
        'Guile',
        'Blanka',
        'E.Honda',
        'Ryu',
        'Vega',
        'Balrog',
      ])
    })

    it('應該能處理一直向右移動的情況', () => {
      moves = ['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right']
      expect(fn.streetFighterSelection(fighters, [0, 0], moves)).toEqual([
        'E.Honda',
        'Blanka',
        'Guile',
        'Balrog',
        'Vega',
        'Ryu',
        'E.Honda',
        'Blanka',
      ])
    })

    it('應該能使用所有4個方向順時針移動兩次', () => {
      moves = ['up', 'left', 'down', 'right', 'up', 'left', 'down', 'right']
      expect(fn.streetFighterSelection(fighters, [0, 0], moves)).toEqual([
        'Ryu',
        'Vega',
        'M.Bison',
        'Ken',
        'Ryu',
        'Vega',
        'M.Bison',
        'Ken',
      ])
    })

    it('應該能處理一直向下移動的情況', () => {
      moves = ['down', 'down', 'down', 'down']
      expect(fn.streetFighterSelection(fighters, [0, 0], moves)).toEqual([
        'Ken',
        'Ken',
        'Ken',
        'Ken',
      ])
    })

    it('應該能處理一直向上移動的情況', () => {
      moves = ['up', 'up', 'up', 'up']
      expect(fn.streetFighterSelection(fighters, [0, 0], moves)).toEqual([
        'Ryu',
        'Ryu',
        'Ryu',
        'Ryu',
      ])
    })
  })
})

describe('The Vowel Code', () => {
  it('應正確編碼字串', () => {
    expect(fn.encode('hello')).toBe('h2ll4')
    expect(fn.encode('How are you today?')).toBe('H4w 1r2 y45 t4d1y?')
    expect(fn.encode('This is an encoding test.')).toBe('Th3s 3s 1n 2nc4d3ng t2st.')
  })

  it('應正確解碼字串', () => {
    expect(fn.decode('h2ll4')).toBe('hello')
    expect(fn.decode('H4w 1r2 y45 t4d1y?')).toBe('How are you today?')
    expect(fn.decode('Th3s 3s 1n 2nc4d3ng t2st.')).toBe('This is an encoding test.')
  })
})

describe('A Rule of Divisibility by 13', function () {
  it('應正確計算13的整除規則', () => {
    expect(fn.thirt(8529)).toBe(79)
    expect(fn.thirt(85299258)).toBe(31)
  })
})

describe('Backspaces in string', function () {
  it('應正確處理刪除字串', () => {
    expect(fn.cleanString('abc#d##c')).toBe('ac')
    expect(fn.cleanString('abc####d##c#')).toBe('')
  })
})

describe('Consonant value', function () {
  it('應返回正確的字母值', () => {
    expect(fn.solve('zodiac')).toBe(26)
    expect(fn.solve('chruschtschov')).toBe(80)
    expect(fn.solve('khrushchev')).toBe(38)
    expect(fn.solve('strength')).toBe(57)
    expect(fn.solve('catchphrase')).toBe(73)
    expect(fn.solve('twelfthstreet')).toBe(103)
    expect(fn.solve('mischtschenkoana')).toBe(80)
  })
})

describe('Meeting', () => {
  it('應返回正確的會議字串', () => {
    expect(
      fn.meeting(
        'Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn'
      )
    ).toBe(
      '(ARNO, ANN)(BELL, JOHN)(CORNWELL, ALEX)(DORNY, ABBA)(KERN, LEWIS)(KORN, ALEX)(META, GRACE)(SCHWARZ, VICTORIA)(STAN, MADISON)(STAN, MEGAN)(WAHL, ALEXIS)'
    )
    expect(
      fn.meeting(
        'John:Gates;Michael:Wahl;Megan:Bell;Paul:Dorries;James:Dorny;Lewis:Steve;Alex:Meta;Elizabeth:Russel;Anna:Korn;Ann:Kern;Amber:Cornwell'
      )
    ).toBe(
      '(BELL, MEGAN)(CORNWELL, AMBER)(DORNY, JAMES)(DORRIES, PAUL)(GATES, JOHN)(KERN, ANN)(KORN, ANNA)(META, ALEX)(RUSSEL, ELIZABETH)(STEVE, LEWIS)(WAHL, MICHAEL)'
    )
  })
})

describe('Decipher this!', () => {
  it('應返回正確的解密字串', () => {
    expect(fn.decipherThis('')).toBe('')
    expect(fn.decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o')).toBe(
      'Have a go at this and see how you do'
    )
    expect(fn.decipherThis('65 119esi 111dl 111lw 108dvei 105n 97n 111ka')).toBe(
      'A wise old owl lived in an oak'
    )
  })
})

describe('Encrypt this!', () => {
  it('應返回正確的加密字串', () => {
    expect(fn.encryptThis('')).toBe('')
    expect(fn.encryptThis('A')).toBe('65')
    expect(fn.encryptThis('A wise old owl lived in an oak')).toBe(
      '65 119esi 111dl 111lw 108dvei 105n 97n 111ka'
    )
    expect(fn.encryptThis('The more he saw the less he spoke')).toBe(
      '84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp'
    )
    expect(fn.encryptThis('The less he spoke the more he heard')).toBe(
      '84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare'
    )
    expect(fn.encryptThis('Why can we not all be like that wise old bird')).toBe(
      '87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri'
    )
    expect(fn.encryptThis('Thank you Piotr for all your help')).toBe(
      '84kanh 121uo 80roti 102ro 97ll 121ruo 104ple'
    )
  })
})

describe('Valid Parentheses', () => {
  it('應返回正確的括號驗證結果', () => {
    expect(fn.validParentheses('()')).toBe(true)
    expect(fn.validParentheses('(())')).toBe(true)
    expect(fn.validParentheses('()()')).toBe(true)
    expect(fn.validParentheses(')(')).toBe(false)
    expect(fn.validParentheses('()()(')).toBe(false)
    expect(fn.validParentheses(')()(')).toBe(false)
  })
})

describe('Reverse or rotate?', function () {
  it('應返回正確的字串', function () {
    expect(fn.revRot('1234', 0)).toBe('')
    expect(fn.revRot('', 0)).toBe('')
    expect(fn.revRot('1234', 5)).toBe('')
    expect(fn.revRot('123456987654', 6)).toBe('234561876549')
    expect(fn.revRot('733049910872815764', 5)).toBe('330479108928157')
  })
})

describe('Sums of Parts', () => {
  it('應回傳正確的對應總和', function () {
    expect(fn.partsSums([])).toEqual([0])
    expect(fn.partsSums([0, 1, 3, 6, 10])).toEqual([20, 20, 19, 16, 10, 0])
    expect(fn.partsSums([1, 2, 3, 4, 5, 6])).toEqual([21, 20, 18, 15, 11, 6, 0])
    expect(fn.partsSums([744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358])).toEqual(
      [
        10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168,
        2579358, 0,
      ]
    )
  })
})

describe('Multiplication table', () => {
  it('應返回正確的九九乘法表', () => {
    expect(fn.multiplicationTable(1)).toEqual([[1]])
    expect(fn.multiplicationTable(2)).toEqual([
      [1, 2],
      [2, 4],
    ])
    expect(fn.multiplicationTable(3)).toEqual([
      [1, 2, 3],
      [2, 4, 6],
      [3, 6, 9],
    ])
  })
})

describe('Make the Deadfish Swim', () => {
  it('應返回正確的解析結果', () => {
    expect(fn.parse('iiisdoso')).toEqual([8, 64])
    expect(fn.parse('iiisxxxdoso')).toEqual([8, 64])
  })
})

describe('Rectangle into Squares', () => {
  function testing(l: number, w: number, expected: number[] | null): void {
    expect(fn.sqInRect(l, w)).toEqual(expected)
  }

  it('應返回正確的正方形邊長', () => {
    testing(5, 5, null)
    testing(5, 3, [3, 2, 1, 1])
    testing(3, 5, [3, 2, 1, 1])
    testing(20, 14, [14, 6, 6, 2, 2, 2])
    testing(14, 20, [14, 6, 6, 2, 2, 2])
  })
})

describe('Give me a Diamond', () => {
  it('當輸入為奇數並大於零時，應返回正確的字串', () => {
    expect(fn.diamond(1)).toBe('*\n')
    expect(fn.diamond(3)).toBe(' *\n***\n *\n')
    expect(fn.diamond(5)).toBe('  *\n ***\n*****\n ***\n  *\n')
  })

  it('當輸入為偶數或小於1時，應返回 null', () => {
    expect(fn.diamond(2)).toBeNull()
    expect(fn.diamond(-3)).toBeNull()
    expect(fn.diamond(0)).toBeNull()
  })
})

describe('WeIrD StRiNg CaSe', () => {
  function doTest(input: string, expected: string): void {
    const actual = fn.toWeirdCase(input)
    expect(actual).toBe(expected)
  }

  it('應返回正確的字串', () => {
    doTest('This is a test', 'ThIs Is A TeSt')
    doTest('', '')
    doTest('unique', 'UnIqUe')
    doTest('UPPER CASE', 'UpPeR CaSe')
    doTest('lower case', 'LoWeR CaSe')
  })
})

describe('Simple Encryption #1 - Alternating Split', () => {
  it('應返回正確的加密字串', () => {
    expect(fn.encrypt('This is a test!', 0)).toBe('This is a test!')
    expect(fn.encrypt('This is a test!', 1)).toBe('hsi  etTi sats!')
    expect(fn.encrypt('This is a test!', 2)).toBe('s eT ashi tist!')
    expect(fn.encrypt('This is a test!', 3)).toBe(' Tah itse sits!')
    expect(fn.encrypt('This is a test!', 4)).toBe('This is a test!')
    expect(fn.encrypt('This is a test!', -1)).toBe('This is a test!')
    expect(fn.encrypt('This kata is very interesting!', 1)).toBe('hskt svr neetn!Ti aai eyitrsig')
  })

  it('應返回正確的解密字串', () => {
    expect(fn.decrypt('This is a test!', 0)).toBe('This is a test!')
    expect(fn.decrypt('hsi  etTi sats!', 1)).toBe('This is a test!')
    expect(fn.decrypt('s eT ashi tist!', 2)).toBe('This is a test!')
    expect(fn.decrypt(' Tah itse sits!', 3)).toBe('This is a test!')
    expect(fn.decrypt('This is a test!', 4)).toBe('This is a test!')
    expect(fn.decrypt('This is a test!', -1)).toBe('This is a test!')
    expect(fn.decrypt('hskt svr neetn!Ti aai eyitrsig', 1)).toBe('This kata is very interesting!')
  })

  it('當傳入的第一個參數為空字串或 null，應直接回傳第一個參數', () => {
    expect(fn.encrypt('', 0)).toBe('')
    expect(fn.decrypt('', 0)).toBe('')
    expect(fn.encrypt(null, 0)).toBeNull()
    expect(fn.decrypt(null, 0)).toBeNull()
  })
})

describe('amelCase Method', () => {
  it('應將字串轉換為駝峰命名法', () => {
    expect(fn.camelCase('')).toBe('')
    expect(fn.camelCase('test case')).toBe('TestCase')
    expect(fn.camelCase('camel case method')).toBe('CamelCaseMethod')
    expect(fn.camelCase('say hello')).toBe('SayHello')
    expect(fn.camelCase('camel case word')).toBe('CamelCaseWord')
  })
})

describe('Take a Number And Sum Its Digits Raised To The Consecutive Powers', () => {
  it('應返回正確的數字列表', () => {
    expect(fn.sumDigPow(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
    expect(fn.sumDigPow(1, 100)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
    expect(fn.sumDigPow(10, 100)).toEqual([89])
    expect(fn.sumDigPow(90, 100)).toEqual([])
    expect(fn.sumDigPow(90, 150)).toEqual([135])
    expect(fn.sumDigPow(50, 150)).toEqual([89, 135])
    expect(fn.sumDigPow(10, 150)).toEqual([89, 135])
  })
})

describe('Two Sum', () => {
  function doTest(numbers: number[], targetSum: number): void {
    const [idx0, idx1] = fn.twoSum(numbers, targetSum) ?? []
    const num0 = numbers[idx0]
    const num1 = numbers[idx1]

    expect(idx0).not.toBe(idx1)
    expect(num0 + num1).toBe(targetSum)
  }

  it('應返回正確的兩個索引值', () => {
    doTest([1, 2, 3], 4)
    doTest([1234, 5678, 9012], 14690)
    doTest([2, 2, 3], 4)
    doTest([2, 3, 1], 3)
  })
})

describe('Mexican Wave', () => {
  let result: string[]

  it('應返回墨西哥波陣列', () => {
    result = ['Hello', 'hEllo', 'heLlo', 'helLo', 'hellO']
    expect(fn.wave('hello')).toEqual(result)

    result = [
      'Codewars',
      'cOdewars',
      'coDewars',
      'codEwars',
      'codeWars',
      'codewArs',
      'codewaRs',
      'codewarS',
    ]
    expect(fn.wave('codewars')).toEqual(result)

    result = []
    expect(fn.wave('')).toEqual(result)

    result = [
      'Two words',
      'tWo words',
      'twO words',
      'two Words',
      'two wOrds',
      'two woRds',
      'two worDs',
      'two wordS',
    ]
    expect(fn.wave('two words')).toEqual(result)

    result = [' Gap ', ' gAp ', ' gaP ']
    expect(fn.wave(' gap ')).toEqual(result)
  })
})

describe('The Supermarket Queue', () => {
  it('應返回所有顧客結帳所需的最短時間', () => {
    expect(fn.queueTime([], 1)).toBe(0)
    expect(fn.queueTime([1, 2, 3, 4], 1)).toBe(10)
    expect(fn.queueTime([2, 2, 3, 3, 4, 4], 2)).toBe(9)
    expect(fn.queueTime([1, 2, 3, 4, 5], 100)).toBe(5)
    expect(fn.queueTime([5, 3, 4], 1)).toBe(12)
    expect(fn.queueTime([10, 2, 3, 3], 2)).toBe(10)
    expect(fn.queueTime([2, 3, 10, 2], 2)).toBe(12)
  })
})

describe('Which are in?', () => {
  function testing(a1: string[], a2: string[], expected: string[]) {
    expect(fn.inArray(a1, a2)).toEqual(expected)
  }

  it('應按照字母順序返回正確的結果', () => {
    const a2 = ['lively', 'alive', 'harp', 'sharp', 'armstrong']

    let a1 = ['arp', 'live', 'strong']
    testing(a1, a2, ['arp', 'live', 'strong'])
    a1 = ['xyz', 'live', 'strong']
    testing(a1, a2, ['live', 'strong'])
    a1 = ['live', 'strong', 'arp']
    testing(a1, a2, ['arp', 'live', 'strong'])
    a1 = ['live', 'strong', 'lyal', 'lysh', 'arp']
    testing(a1, a2, ['arp', 'live', 'strong'])
    a1 = ['tarp', 'mice', 'bull']
    testing(a1, a2, [])
    a1 = []
    testing(a1, a2, [])
  })
})

describe('Bouncing Balls', () => {
  it('應返回球從窗前經過的次數', () => {
    expect(fn.bouncingBall(3.0, 0.66, 1.5)).toBe(3)
    expect(fn.bouncingBall(30.0, 0.66, 1.5)).toBe(15)
    expect(fn.bouncingBall(30, 0.75, 1.5)).toBe(21)
    expect(fn.bouncingBall(30, 0.4, 10)).toBe(3)
  })
})

describe('Are they the "same"?', () => {
  it('應判斷 a2 陣列中的元素是否為 a1 陣列中每個元素的平方', () => {
    const a1 = [121, 144, 19, 161, 19, 144, 19, 11]
    const a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]
    expect(fn.comp(a1, a2)).toBe(true)

    const a1Alt = [121, 144, 19, 161, 19, 144, 19, 11]
    const a2Alt = [11 * 21, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19]
    expect(fn.comp(a1Alt, a2Alt)).toBe(false)
  })
})

describe('Write Number in Expanded Form', () => {
  it('應返回數字的擴展形式', () => {
    expect(fn.expandedForm(12)).toBe('10 + 2')
    expect(fn.expandedForm(42)).toBe('40 + 2')
    expect(fn.expandedForm(70304)).toBe('70000 + 300 + 4')
  })
})

describe('Consecutive strings', () => {
  it('應返回最長的字串', () => {
    expect(fn.longestConsec(['zone', 'abigail', 'theta', 'form', 'libe', 'zas'], 2)).toBe(
      'abigailtheta'
    )
    expect(
      fn.longestConsec(
        ['ejjjjmmtthh', 'zxxuueeg', 'aanlljrrrxx', 'dqqqaaabbb', 'oocccffuucccjjjkkkjyyyeehh'],
        1
      )
    ).toBe('oocccffuucccjjjkkkjyyyeehh')
    expect(fn.longestConsec(['it', 'wkppv', 'ixoyx', '3452', 'zzzzzzzzzzzz'], 3)).toBe(
      'ixoyx3452zzzzzzzzzzzz'
    )
  })
})

describe('Is a number prime?', () => {
  it('應判斷數字是否為質數', () => {
    expect(fn.isPrime(0)).toBe(false)
    expect(fn.isPrime(1)).toBe(false)
    expect(fn.isPrime(2)).toBe(true)
    expect(fn.isPrime(73)).toBe(true)
    expect(fn.isPrime(75)).toBe(false)
    expect(fn.isPrime(-1)).toBe(false)
  })
})

describe('Valid Braces', () => {
  it('應驗證括號是否匹配', () => {
    expect(fn.validBraces('()')).toBe(true)
    expect(fn.validBraces('[(])')).toBe(false)
    expect(fn.validBraces('([{}])')).toBe(true)
  })
})

describe('Break camelCase', () => {
  it('應將駝峰式命名的字串拆分，在每個大寫字母之前插入一個空格', () => {
    expect(fn.breakCamelCase('')).toBe('')
    expect(fn.breakCamelCase('camelCasing')).toBe('camel Casing')
    expect(fn.breakCamelCase('camelCasingTest')).toBe('camel Casing Test')
  })
})

describe('Count the smiley faces!', () => {
  it('應返回笑臉表情符號的數量', () => {
    expect(fn.countSmileys([])).toBe(0)
    expect(fn.countSmileys([':D', ':~)', ';~D', ':)'])).toBe(4)
    expect(fn.countSmileys([':)', ':(', ':D', ':O', ':;'])).toBe(2)
    expect(fn.countSmileys([';]', ':[', ';*', ':$', ';-D'])).toBe(1)
  })
})

describe('Delete occurrences of an element if it occurs more than n times', () => {
  it('應刪除多餘次數的元素', () => {
    expect(fn.deleteNth([20, 37, 20, 21], 1)).toEqual([20, 37, 21])
    expect(fn.deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3)).toEqual([1, 1, 3, 3, 7, 2, 2, 2])
    expect(fn.deleteNth([12, 39, 19, 39, 39, 19, 12], 1)).toEqual([12, 39, 19])
  })
})

describe('Build Tower', () => {
  it('應返回一個包含塔每一層的字串陣列', () => {
    expect(fn.towerBuilder(1)).toEqual(['*'])
    expect(fn.towerBuilder(2)).toEqual([' * ', '***'])
    expect(fn.towerBuilder(3)).toEqual(['  *  ', ' *** ', '*****'])
  })
})

describe('Find the missing letter', () => {
  it('應返回陣列中缺少的字母', () => {
    expect(fn.findMissingLetter(['a', 'b', 'c', 'd', 'f'])).toBe('e')
    expect(fn.findMissingLetter(['O', 'Q', 'R', 'S'])).toBe('P')
    expect(fn.findMissingLetter([])).toBe('')
  })
})

describe('Sort the odd', () => {
  it('應返回正確的數字陣列', () => {
    expect(fn.sortArray([5, 3, 2, 8, 1, 4])).toEqual([1, 3, 2, 8, 5, 4])
    expect(fn.sortArray([5, 3, 1, 8, 0])).toEqual([1, 3, 5, 8, 0])
    expect(fn.sortArray([])).toEqual([])
  })
})

describe('Find the unique number', () => {
  it('應返回陣列中唯一的數字', () => {
    expect(fn.findUniq([1, 1, 1, 2, 1, 1])).toBe(2)
    expect(fn.findUniq([0, 0, 0.55, 0, 0])).toBe(0.55)
  })
})

describe('Split Strings', () => {
  it('應將給定的字串拆分成長度為兩個字元的子串', () => {
    expect(fn.splitStrings('abcdef')).toEqual(['ab', 'cd', 'ef']) // "字串為: 'abcdef'"
    expect(fn.splitStrings('abcdefg')).toEqual(['ab', 'cd', 'ef', 'g_']) // "字串為: 'abcdefg'"
    expect(fn.splitStrings('')).toEqual([]) // "字串為: ''"
  })
})

describe('Equal Sides Of An Array', () => {
  it('應返回正確的結果', () => {
    expect(fn.findEvenIndex([1, 2, 3, 4, 3, 2, 1])).toBe(3) // "陣列為: [1,2,3,4,3,2,1]"
    expect(fn.findEvenIndex([1, 100, 50, -51, 1, 1])).toBe(1) // "陣列為: [1,100,50,-51,1,1]"
    expect(fn.findEvenIndex([1, 2, 3, 4, 5, 6])).toBe(-1) // "陣列為: [1,2,3,4,5,6]"
    expect(fn.findEvenIndex([20, 10, 30, 10, 10, 15, 35])).toBe(3) // "陣列為: [20,10,30,10,10,15,35]"
  })
})

describe('Playing with digits', () => {
  it('應返回正確的結果', () => {
    expect(fn.digPow(89, 1)).toBe(1) // 返回 1 (因為 8^1 + 9^2 = 89 = 89 * 1)
    expect(fn.digPow(92, 1)).toBe(-1) // 返回 -1 (因為 9^1 + 2^2 = 13，無法被 92 整除)
    expect(fn.digPow(46288, 3)).toBe(51) // 返回 51 (因為 4^3 + 6^4 + 2^5 + 8^6 + 8^7 = 2360688 = 46288 * 51)
  })
})

describe('Detect Pangram', () => {
  it('應判斷是否為全字母句', () => {
    expect(fn.isPangram('The quick brown fox jumps over the lazy dog.')).toBe(true) // 'The quick brown fox jumps over the lazy dog.' 是全字母句
    expect(fn.isPangram('This is not a pangram.')).toBe(false) // 'This is not a pangram.' 不是全字母句
    expect(fn.isPangram('123')).toBe(false)
  })
})

describe('Unique In Order', () => {
  it('應返回一個沒有相鄰重複元素的陣列，並保持原有順序', () => {
    expect(fn.uniqueInOrder('AAAABBBCCDAABBB')).toEqual(['A', 'B', 'C', 'D', 'A', 'B'])
  })
})

describe('Tribonacci Sequence', () => {
  it('應返回指定長度的泰波拿契數列', () => {
    expect(fn.tribonacci([1, 1, 1], 10)).toEqual([1, 1, 1, 3, 5, 9, 17, 31, 57, 105])
    expect(fn.tribonacci([0, 0, 1], 10)).toEqual([0, 0, 1, 1, 2, 4, 7, 13, 24, 44])
    expect(fn.tribonacci([0, 1, 1], 10)).toEqual([0, 1, 1, 2, 4, 7, 13, 24, 44, 81])
    expect(fn.tribonacci([1, 0, 0], 10)).toEqual([1, 0, 0, 1, 1, 2, 4, 7, 13, 24])
    expect(fn.tribonacci([0, 0, 0], 10)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    expect(fn.tribonacci([1, 2, 3], 10)).toEqual([1, 2, 3, 6, 11, 20, 37, 68, 125, 230])
    expect(fn.tribonacci([3, 2, 1], 10)).toEqual([3, 2, 1, 6, 9, 16, 31, 56, 103, 190])
    expect(fn.tribonacci([1, 1, 1], 1)).toEqual([1])
    expect(fn.tribonacci([2, 10, 2], 2)).toEqual([2, 10])
    expect(fn.tribonacci([300, 200, 100], 0)).toEqual([])
    expect(fn.tribonacci([0.5, 0.5, 0.5], 30)).toEqual([
      0.5, 0.5, 0.5, 1.5, 2.5, 4.5, 8.5, 15.5, 28.5, 52.5, 96.5, 177.5, 326.5, 600.5, 1104.5,
      2031.5, 3736.5, 6872.5, 12640.5, 23249.5, 42762.5, 78652.5, 144664.5, 266079.5, 489396.5,
      900140.5, 1655616.5, 3045153.5, 5600910.5, 10301680.5,
    ])
  })
})

describe('Your order, please', () => {
  it('應返回一個根據單詞中數字順序排序後的字串', () => {
    expect(fn.order('is2 Thi1s T4est 3a')).toBe('Thi1s is2 3a T4est')
    expect(fn.order('is2 This T4est 3a')).toBe('is2 This 3a T4est')
    expect(fn.order('4of Fo1r pe6ople g3ood th5e the2')).toBe('Fo1r the2 g3ood 4of th5e pe6ople')
    expect(fn.order('')).toBe('')
  })
})

describe('Does my number look big in this?', () => {
  it('應判斷數字是否為阿姆斯壯數', () => {
    expect(fn.narcissistic(7)).toBe(true)
    expect(fn.narcissistic(153)).toBe(true)
    expect(fn.narcissistic(1634)).toBe(true)
  })
})

describe('Convert string to camel case', () => {
  it('應返回空字串', () => {
    expect(fn.toCamelCase('')).toBe('')
  })

  it("應將 'the_stealth_warrior' 轉換為 'theStealthWarrior'", () => {
    expect(fn.toCamelCase('the_stealth_warrior')).toBe('theStealthWarrior')
  })

  it("應將 'The-Stealth-Warrior' 轉換為 'TheStealthWarrior'", () => {
    expect(fn.toCamelCase('The-Stealth-Warrior')).toBe('TheStealthWarrior')
  })

  it("應將 'A-B-C' 轉換為 'ABC'", () => {
    expect(fn.toCamelCase('A-B-C')).toBe('ABC')
  })
})

describe('Persistent Bugger', () => {
  it('應返回 39 的持續性為 3', () => {
    expect(fn.persistence(39)).toBe(3)
  })

  it('應返回 4 的持續性為 0', () => {
    expect(fn.persistence(4)).toBe(0)
  })

  it('應返回 25 的持續性為 2', () => {
    expect(fn.persistence(25)).toBe(2)
  })

  it('應返回 999 的持續性為 4', () => {
    expect(fn.persistence(999)).toBe(4)
  })
})

describe('alphabetPosition', () => {
  it('應返回 "The sunset sets at twelve o\' clock." 的正確位置', () => {
    expect(fn.alphabetPosition("The sunset sets at twelve o' clock.")).toBe(
      '20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11'
    )
  })

  it('應返回 "The narwhal bacons at midnight." 的正確位置', () => {
    expect(fn.alphabetPosition('The narwhal bacons at midnight.')).toBe(
      '20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20'
    )
  })

  it('當沒有任何英文字母時，應返回空字串', () => {
    expect(fn.alphabetPosition('123')).toBe('')
  })
})

describe('Take a Ten Minutes Walk', () => {
  it('如有用十步走完並回到原點，應返回 true', () => {
    expect(fn.isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toBe(true)
  })

  it('如未用十步走完並回到原點，應返回 false', () => {
    expect(fn.isValidWalk(['w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e', 'w', 'e'])).toBe(false)
    expect(fn.isValidWalk(['w'])).toBe(false)
    expect(fn.isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's'])).toBe(false)
  })
})

describe('findOutlier', () => {
  it('應返回陣列中唯一的奇數或偶數', () => {
    expect(fn.findOutlier([0, 1, 2])).toBe(1)
    expect(fn.findOutlier([1, 2, 3])).toBe(2)
    expect(fn.findOutlier([2, 6, 8, 10, 3])).toBe(3)
    expect(fn.findOutlier([0, 0, 3, 0, 0])).toBe(3)
    expect(fn.findOutlier([1, 1, 0, 1, 1])).toBe(0)
  })
})

describe('Array.diff', () => {
  it('假設兩個陣列 a 和 b，將 a 中存在於 b 中的元素刪除並返回結果', () => {
    expect(fn.arrayDiff([], [4, 5])).toEqual([])
    expect(fn.arrayDiff([3, 4], [3])).toEqual([4])
    expect(fn.arrayDiff([1, 8, 2], [])).toEqual([1, 8, 2])
    expect(fn.arrayDiff([1, 2, 3], [1, 2])).toEqual([3])
  })
})

describe('Sum of Digits / Digital Root', () => {
  it('將一個數字的每位數字相加，並將總和的個位數當作結果返回', () => {
    expect(fn.digitalRoot(16)).toBe(7) // --> 1 + 6 = 7
    expect(fn.digitalRoot(456)).toBe(6) // -->  4 + 5 + 6 = 15  -->  1 + 5 = 6
  })
})

describe('Find the odd int', () => {
  it('應返回出現次數為奇數的數字', () => {
    expect(fn.findOdd([20, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 20, 4, 5, 4])).toBe(5)
    expect(fn.findOdd([10])).toBe(10)
    expect(fn.findOdd([1, 1, 2])).toBe(2)
    expect(fn.findOdd([1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 3])).toBe(3)
  })
})

describe('Who likes it?', () => {
  it('應返回一個描述這些人是否點讚的字串', () => {
    expect(fn.likes([])).toBe('no one likes this')
    expect(fn.likes(['Peter'])).toBe('Peter likes this')
    expect(fn.likes(['Jacob', 'Alex'])).toBe('Jacob and Alex like this')
    expect(fn.likes(['Max', 'John', 'Mark'])).toBe('Max, John and Mark like this')
    expect(fn.likes(['Alex', 'Jacob', 'Mark', 'Max'])).toBe('Alex, Jacob and 2 others like this')
  })
})

describe('Stop gninnipS My sdroW!', () => {
  it('應反轉句子中五個以上字母的單字', () => {
    expect(fn.spinWords('Welcome')).toBe('emocleW')
    expect(fn.spinWords('Hey fellow warriors')).toBe('Hey wollef sroirraw')
    expect(fn.spinWords('This is a test')).toBe('This is a test')
    expect(fn.spinWords('This is another test')).toBe('This is rehtona test')
    expect(fn.spinWords('You are almost to the last test')).toBe('You are tsomla to the last test')
    expect(fn.spinWords('Just kidding there is still one more')).toBe(
      'Just gniddik ereht is llits one more'
    )
    expect(fn.spinWords('Seriously this is the last one')).toBe('ylsuoireS this is the last one')
  })
})

describe('Multiples of 3 or 5', () => {
  it('應找到小於傳入的數字且是 3 或 5 的倍數的所有自然數，並返回這些數字的和', () => {
    expect(fn.solution(10)).toBe(23) // 返回 23 (3 + 5 + 6 + 9)
    expect(fn.solution(20)).toBe(78) // 返回 78 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18)
  })

  it('如傳入的數字小於 0 時，應返回 0', () => {
    expect(fn.solution(-5)).toBe(0)
  })
})

describe('Only Duplicates', () => {
  it('應該返回字串中僅包含重複字符的部分', () => {
    expect(fn.onlyDuplicates('abccdefee')).toBe('cceee')
    expect(fn.onlyDuplicates('hello')).toBe('ll')
    expect(fn.onlyDuplicates('colloquial')).toBe('ollol')
    expect(fn.onlyDuplicates('foundersandcoders')).toBe('ondersndoders')
  })
})

describe('getCount 函數的測試', function () {
  it('應該正確計算出字串中母音字母的數量', function () {
    expect(fn.getCount('abracadabra')).toBe(5)
  })
})

describe('Form The Minimum', () => {
  it('當輸入為 [1, 3, 1] 時，應返回 13', () => {
    const expected = 13
    const actual = fn.minValue([1, 3, 1])

    expect(actual).to.eql(expected)
  })

  it('當輸入為 [4, 7, 5, 7] 時，應返回 457', () => {
    const expected = 457
    const actual = fn.minValue([4, 7, 5, 7])

    expect(actual).to.eql(expected)
  })
})

describe('Printer Errors', () => {
  it('應返回一個字串，格式為"錯誤個數/總字母數"', () => {
    expect(fn.printerError('aaabbbbhaijjjm')).toBe('0/14')
    expect(fn.printerError('aaaxbbbbyyhwawiwjjjwwm')).toBe('8/22')
  })
})

describe("What's the real floor?", function () {
  it('應該返回實際樓層數', () => {
    expect(fn.getRealFloor(-1)).toBe(-1)
    expect(fn.getRealFloor(1)).toBe(0)
    expect(fn.getRealFloor(5)).toBe(4)
    expect(fn.getRealFloor(15)).toBe(13)
  })
})

describe('Remove First and Last Character', () => {
  it('應該移除字串的首尾字元', () => {
    expect(fn.removeChar('eloquent')).toBe('loquen')
    expect(fn.removeChar('country')).toBe('ountr')
    expect(fn.removeChar('person')).toBe('erso')
    expect(fn.removeChar('place')).toBe('lac')
  })
})

describe('Abbreviate a Two Word Name', () => {
  it('應該返回正確的縮寫', () => {
    expect(fn.abbrevName('Sam Harris')).toBe('S.H')
    expect(fn.abbrevName('Patrick Feenan')).toBe('P.F')
    expect(fn.abbrevName('R Favuzzi')).toBe('R.F')
  })
})

describe('Small enough? - Beginner', () => {
  it('應該返回布爾值，指示給定數組中的所有元素是否都小於或等於給定的限制值', () => {
    expect(fn.smallEnough([66, 101], 200)).toBe(true)
    expect(fn.smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)).toBe(false)
    expect(fn.smallEnough([101, 45, 75, 105, 99, 107], 107)).toBe(true)
    expect(fn.smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)).toBe(true)
    expect(fn.smallEnough([1, 1, 1, 1, 1, 2], 1)).toBe(false)
    expect(fn.smallEnough([78, 33, 22, 44, 88, 9, 6], 87)).toBe(false)
    expect(fn.smallEnough([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)).toBe(true)
    expect(fn.smallEnough([12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12], 12)).toBe(true)
  })
})

describe('Is it a palindrome?', () => {
  it('如果字串是回文則返回 true，否則返回 false', () => {
    expect(fn.isPalindrome('a')).toBe(true)
    expect(fn.isPalindrome('aba')).toBe(true)
    expect(fn.isPalindrome('Abba')).toBe(true)
    expect(fn.isPalindrome('hello')).toBe(false)
    expect(fn.isPalindrome('Bob')).toBe(true)
    expect(fn.isPalindrome('Madam')).toBe(true)
    expect(fn.isPalindrome('AbBa')).toBe(true)
    expect(fn.isPalindrome('')).toBe(true)
  })
})

describe('Thinkful - Logic Drills: Traffic light', () => {
  it('應正確更新交通信號燈', () => {
    expect(fn.updateLight('green')).toBe('yellow')
    expect(fn.updateLight('yellow')).toBe('red')
    expect(fn.updateLight('red')).toBe('green')
  })
})

describe('Get the Middle Character', () => {
  it('如果單詞的長度是奇數，返回中間字元。如果單詞的長度是偶數，返回中間的 2 個字元', () => {
    expect(fn.getMiddle('test')).toBe('es')
    expect(fn.getMiddle('testing')).toBe('t')
  })
})

describe('Remove String Spaces', () => {
  it('應從字串中移除所有的空格', () => {
    expect(fn.noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')).toBe('8j8mBliB8gimjB8B8jlB')
    expect(fn.noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd')).toBe(
      '88Bifk8hB8BB8BBBB888chl8BhBfd'
    )
    expect(fn.noSpace('8aaaaa dddd r     ')).toBe('8aaaaaddddr')
    expect(fn.noSpace('')).toBe('')
  })
})

describe('Sum of the first nth term of Series', () => {
  it('應根據參數中的自然數 n，返回級數的前 n 項之和', () => {
    // 級數：1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
    expect(fn.SeriesSum(1)).toBe('1.00')
    expect(fn.SeriesSum(2)).toBe('1.25')
    expect(fn.SeriesSum(3)).toBe('1.39')
    expect(fn.SeriesSum(4)).toBe('1.49')
  })
})

describe('Correct the mistakes of the character recognition software', () => {
  it('應將 5 替換為 S、0 替換為 O、1 替換為 I', () => {
    expect(fn.correct('L0ND0N')).toBe('LONDON')
    expect(fn.correct('DUBL1N')).toBe('DUBLIN')
    expect(fn.correct('51NGAP0RE')).toBe('SINGAPORE')
    expect(fn.correct('BUDAPE5T')).toBe('BUDAPEST')
    expect(fn.correct('PAR15')).toBe('PARIS')
  })
})

describe('Powers of 2', () => {
  it('應返回 2 的次方數組', () => {
    expect(fn.powersOfTwo(0)).toStrictEqual([1])
    expect(fn.powersOfTwo(1)).toStrictEqual([1, 2])
    expect(fn.powersOfTwo(4)).toStrictEqual([1, 2, 4, 8, 16])
  })
})

describe('Double Char', () => {
  it('應將字串中的每個字元重複一次', () => {
    expect(fn.doubleChar('abcd')).toBe('aabbccdd')
    expect(fn.doubleChar('Adidas')).toBe('AAddiiddaass')
    expect(fn.doubleChar('1337')).toBe('11333377')
    expect(fn.doubleChar('illuminati')).toBe('iilllluummiinnaattii')
    expect(fn.doubleChar('123456')).toBe('112233445566')
    expect(fn.doubleChar('%^&*(')).toBe('%%^^&&**((')
  })
})

describe('String repeat', () => {
  it('應重複字串 n 次', () => {
    expect(fn.repeatStr(3, '*')).toBe('***')
  })
})

describe('What is between?', () => {
  it('應返回介於兩個數之間（包括兩個數）的所有整數', () => {
    expect(fn.between(1, 4)).toStrictEqual([1, 2, 3, 4])
    expect(fn.between(-2, 2)).toStrictEqual([-2, -1, 0, 1, 2])
  })
})

describe('Potenciation', () => {
  it('應返回 x 的 y 次方', () => {
    expect(fn.power(1, 701270)).toBe(1)
    expect(fn.power(2, 2)).toBe(4)
    expect(fn.power(3, 2)).toBe(9)
    expect(fn.power(-1, 40)).toBe(1)
  })
})

describe('Reversed sequence', () => {
  it('應返回一個包含整數從 n 到 1 的陣列', () => {
    expect(fn.reverseSeq(5)).toStrictEqual([5, 4, 3, 2, 1])
  })
})

describe('The falling speed of petals', () => {
  it('依據花瓣的下降速度，返回從某一樹枝飄落到地面的時間 (高度固定為400公分)', () => {
    expect(fn.sakuraFall(5)).toBe(80)
    expect(fn.sakuraFall(10)).toBe(40)
  })
  it('如果初始速度為非正數，則返回值應為 0', () => {
    expect(fn.sakuraFall(-1)).toBe(0)
  })
})

describe('Gravity Flip', () => {
  it('如第一個參數傳入 R 時，應回傳升冪排序的陣列', () => {
    expect(fn.flip('R', [3, 2, 1, 2])).toEqual([1, 2, 2, 3])
  })
  it('如第一個參數傳入 L 時，應回傳降冪排序的陣列', () => {
    expect(fn.flip('L', [1, 4, 5, 3, 5])).toEqual([5, 5, 4, 3, 1])
  })
})

describe("A wolf in sheep's clothing", () => {
  it('如傳入陣列中的 wolf 不在最後一個時，應回傳包含其所在陣列（反轉後）位置的指定字串', () => {
    const ary = ['sheep', 'sheep', 'sheep', 'wolf', 'sheep']
    expect(fn.warnTheSheep(ary)).toBe('Oi! Sheep number 1! You are about to be eaten by a wolf!')
  })
  it('如傳入陣列中的 wolf 在最後一個時，應回傳指定字串', () => {
    const ary = ['sheep', 'sheep', 'wolf']
    expect(fn.warnTheSheep(ary)).toBe('Pls go away and stop eating my sheep')
  })
})

describe('Total amount of points', () => {
  it('應回傳正確的加總分數', () => {
    expect(fn.points(['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3'])).toBe(
      30
    )
    expect(fn.points(['1:1', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4'])).toBe(
      10
    )
    expect(fn.points(['0:1', '0:2', '0:3', '0:4', '1:2', '1:3', '1:4', '2:3', '2:4', '3:4'])).toBe(
      0
    )
    expect(fn.points(['1:0', '2:0', '3:0', '4:0', '2:1', '1:3', '1:4', '2:3', '2:4', '3:4'])).toBe(
      15
    )
    expect(fn.points(['1:0', '2:0', '3:0', '4:4', '2:2', '3:3', '1:4', '2:3', '2:4', '3:4'])).toBe(
      12
    )
  })
})

describe('Sum of differences in array', () => {
  it('應回傳正確的計算結果', () => {
    expect(fn.sumOfDifferences([1, 2, 10])).toBe(9)
    expect(fn.sumOfDifferences([-3, -2, -1])).toBe(2)
    expect(fn.sumOfDifferences([-17, 17])).toBe(34)
    expect(fn.sumOfDifferences([6, -16, -6, 6, 3, -8, -13])).toBe(22)
    expect(fn.sumOfDifferences([0, 6, -6, -3, 0, -7, -5, 4, 2, 2, 6, 1, 1, 5, 3, -3, 4, -2])).toBe(
      13
    )
  })
  it('如為空陣列或長度為 1 時，應回傳 0', () => {
    expect(fn.sumOfDifferences([])).toBe(0)
    expect(fn.sumOfDifferences([-1])).toBe(0)
  })
})

describe('Multiple of index', () => {
  it('應回傳篩選過後的數字陣列', () => {
    expect(fn.multipleOfIndex([22, -6, 32, 82, 9, 25])).toEqual([-6, 32, 25])
    expect(fn.multipleOfIndex([68, -1, 1, -7, 10, 10])).toEqual([-1, 10])
    expect(fn.multipleOfIndex([0, 2, 3, 6, 9])).toEqual([0, 2, 6])
  })
})

describe('CSV representation of array', () => {
  it('應將原二維數字陣列轉換成 CSV 格式的字串', () => {
    const input = [
      [0, 1, 2, 3, 4],
      [10, 11, 12, 13, 14],
      [20, 21, 22, 23, 24],
      [30, 31, 32, 33, 34],
    ]
    const output = '0,1,2,3,4\n' + '10,11,12,13,14\n' + '20,21,22,23,24\n' + '30,31,32,33,34'
    expect(fn.toCsvText(input)).toEqual(output)
  })
})

describe('Array plus array', () => {
  it('應回傳兩個數字陣列的加總', () => {
    expect(fn.arrayPlusArray([1, 2, 3], [4, 5, 6])).toBe(21)
    expect(fn.arrayPlusArray([-1, -2, -3], [-4, -5, -6])).toBe(-21)
    expect(fn.arrayPlusArray([0, 0, 0], [4, 5, 6])).toBe(15)
    expect(fn.arrayPlusArray([100, 200, 300], [400, 500, 600])).toBe(2100)
  })
})

describe('Find the first non-consecutive number', () => {
  it('應回傳陣列中第一個不連續的數字', () => {
    expect(fn.firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])).toBe(6)
  })
  it('如果整個陣列都是連續的，應返回 null', () => {
    expect(fn.firstNonConsecutive([1, 2, 3, 4])).toBe(null)
  })
  it('如果是空陣列，應返回 null', () => {
    expect(fn.firstNonConsecutive([])).toBe(null)
  })
  it('如果陣列中只有一個元素，應返回 null', () => {
    expect(fn.firstNonConsecutive([1])).toBe(null)
  })
})

describe('Find Multiples of a Number', () => {
  it('應回傳正確的倍數數字陣列', () => {
    expect(fn.findMultiples(5, 25)).toEqual([5, 10, 15, 20, 25])
    expect(fn.findMultiples(1, 2)).toEqual([1, 2])
    expect(fn.findMultiples(5, 7)).toEqual([5])
  })
})

describe('Invert values', () => {
  it('應將陣列中的正數轉負數，負數轉正數', () => {
    expect(fn.invert([1, 2, 3, 4, 5])).toEqual([-1, -2, -3, -4, -5])
    expect(fn.invert([1, -2, 3, -4, 5])).toEqual([-1, 2, -3, 4, -5])
  })
  it('如為空陣列則回傳空陣列', () => {
    expect(fn.invert([])).toEqual([])
  })
  it('如元素為零則回傳零', () => {
    expect(fn.invert([0])).toEqual([0])
  })
})

describe('Merge two sorted arrays into one', () => {
  it('應回傳一個合併後按照升序排序的陣列', () => {
    expect(fn.mergeArrays([1, 2, 3, 4], [5, 6, 7, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })
  it('應回傳一個合併後不含重複元素的陣列', () => {
    expect(fn.mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12])).toEqual([
      1, 2, 3, 4, 5, 7, 9, 10, 11, 12,
    ])
  })
})

describe('Duck Duck Goose', () => {
  it('應回傳指定陣列索引中的物件 name 屬性', () => {
    class Player {
      name: string
      constructor(name: string) {
        this.name = name
      }
    }
    let ex_names = ['a', 'b', 'c', 'd', 'c', 'e', 'f', 'g', 'h', 'z']
    let players = ex_names.map(n => new Player(n))
    expect(fn.duckDuckGoose(players, 1)).toBe('a')
    expect(fn.duckDuckGoose(players, 3)).toBe('c')
    expect(fn.duckDuckGoose(players, 10)).toBe('z')
    expect(fn.duckDuckGoose(players, 30)).toBe('z')
  })
})

describe('Beginner - Lost Without a Map', () => {
  it('應回傳乘上兩倍後的數字陣列', () => {
    expect(fn.maps([1, 2, 3])).toEqual([2, 4, 6])
    expect(fn.maps([4, 1, 1, 1, 4])).toEqual([8, 2, 2, 2, 8])
  })
})

describe('Beginner - Reduce but Grow', () => {
  it('應回傳按順序將值相乘的結果', () => {
    expect(fn.grow([1, 2, 3])).toBe(6)
    expect(fn.grow([4, 1, 1, 1, 4])).toBe(16)
    expect(fn.grow([2, 2, 2, 2, 2, 2])).toBe(64)
  })
})

describe('To square(root) or not to square(root)', () => {
  it('應回傳平方或平方根的數字陣列', () => {
    expect(fn.squareOrSquareRoot([4, 3, 9, 7, 2, 1])).toEqual([2, 9, 3, 49, 4, 1])
    expect(fn.squareOrSquareRoot([100, 101, 5, 5, 1, 1])).toEqual([10, 10201, 25, 25, 1, 1])
  })
})

describe('I love you, a little , a lot, passionately ... not at all', () => {
  it('應回傳指定的陣列元素', () => {
    expect(fn.howMuchILoveYou(7)).toBe('I love you')
    expect(fn.howMuchILoveYou(3)).toBe('a lot')
    expect(fn.howMuchILoveYou(6)).toBe('not at all')
  })
})

describe('Well of Ideas - Easy Version', () => {
  it('如果有一個或兩個好點子，則返回 "Publish!"', () => {
    expect(fn.well(['bad', 'bad', 'bad'])).toBe('Fail!')
  })
  it('如果有超過兩個好點子，則返回 "I smell a series!"', () => {
    expect(fn.well(['good', 'bad', 'bad', 'bad', 'bad'])).toBe('Publish!')
  })
  it('如果沒有好點子，則返回 "Fail!"', () => {
    expect(fn.well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])).toBe(
      'I smell a series!'
    )
  })
})

describe('Filter out the geese', () => {
  it('Mixed list', () => {
    expect(
      fn.gooseFilter([
        'Mallard',
        'Hook Bill',
        'African',
        'Crested',
        'Pilgrim',
        'Toulouse',
        'Blue Swedish',
      ])
    ).toEqual(['Mallard', 'Hook Bill', 'Crested', 'Blue Swedish'])
  })
  it('No geese', () => {
    expect(fn.gooseFilter(['Mallard', 'Barbary', 'Hook Bill', 'Blue Swedish', 'Crested'])).toEqual([
      'Mallard',
      'Barbary',
      'Hook Bill',
      'Blue Swedish',
      'Crested',
    ])
  })
  it('All geese', () => {
    expect(
      fn.gooseFilter(['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'])
    ).toEqual([])
  })
})

describe('Sum Mixed Array', () => {
  it('應回傳正確的總和', () => {
    expect(fn.sumMix([9, 3, '7', '3'])).toBe(22)
    expect(fn.sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7])).toBe(42)
    expect(fn.sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0'])).toBe(41)
  })
})

describe('Fake Binary', () => {
  it('應回傳轉換後的字串', () => {
    expect(fn.fakeBin('45385593107843568')).toBe('01011110001100111')
    expect(fn.fakeBin('509321967506747')).toBe('101000111101101')
    expect(fn.fakeBin('366058562030849490134388085')).toBe('011011110000101010000011011')
  })
})

describe('Convert a string to an array', () => {
  it('應回傳分割後的字串並將其轉換為單詞陣列', () => {
    expect(fn.stringToArray('Robin Singh')).toEqual(['Robin', 'Singh'])
    expect(fn.stringToArray('I love arrays they are my favorite')).toEqual([
      'I',
      'love',
      'arrays',
      'they',
      'are',
      'my',
      'favorite',
    ])
  })
})

describe('Is there a vowel in there?', () => {
  it('應回傳正確的陣列內容', () => {
    expect(fn.isVow([118, 117, 120])).toEqual([118, 'u', 120])
    expect(fn.isVow([101, 121, 110, 113, 113, 103, 121, 121, 101, 107, 103])).toEqual([
      'e',
      121,
      110,
      113,
      113,
      103,
      121,
      121,
      'e',
      107,
      103,
    ])
  })
})

describe('Sort and Star', () => {
  it('應回傳排序後的字串，並用 *** 分隔', () => {
    expect(
      fn.twoSort(['bitcoin', 'take', 'over', 'the', 'world', 'maybe', 'who', 'knows', 'perhaps'])
    ).toBe('b***i***t***c***o***i***n')
    expect(
      fn.twoSort([
        'turns',
        'out',
        'random',
        'test',
        'cases',
        'are',
        'easier',
        'than',
        'writing',
        'out',
        'basic',
        'ones',
      ])
    ).toBe('a***r***e')
  })
})

describe('Calculate average', () => {
  it('應回傳正確的平均數字', () => {
    expect(fn.findAverage([1, 1, 1])).toBe(1)
    expect(fn.findAverage([1, 2, 3])).toBe(2)
    expect(fn.findAverage([1, 2, 3, 4])).toBe(2.5)
  })
  it('如為空陣列應回傳0', () => {
    expect(fn.findAverage([])).toEqual(0)
  })
})

describe('Count of positives / sum of negatives', () => {
  it('應回傳一個陣列，其中第一個元素是正數的數量，第二個元素是負數的總和', () => {
    expect(
      fn.countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
    ).toEqual([10, -65])
    expect(
      fn.countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])
    ).toEqual([8, -50])
  })
})

describe('Removing Elements', () => {
  it('應該保留第一個元素並移除每個第二個元素', () => {
    expect(fn.removeEveryOther(['Keep', 'Remove', 'Keep', 'Remove', 'Keep'])).toEqual([
      'Keep',
      'Keep',
      'Keep',
    ])
    expect(fn.removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual([1, 3, 5, 7, 9])
    expect(fn.removeEveryOther(['a', 'b', 'c', 'd', 'e', 'f'])).toEqual(['a', 'c', 'e'])
  })
})

describe('Arguments to Binary addition', () => {
  it('應該回傳數字元素相加的二進制表示', () => {
    expect(fn.arr2bin([1, 2])).toEqual('11')
    expect(fn.arr2bin([1, 2, 'a'])).toEqual('11')
    expect(fn.arr2bin([])).toEqual('0')
    expect(fn.arr2bin(['a', 'b', 'c'])).toEqual('0')
  })
  it('如陣列中有包含 NaN，應回傳 NaN', () => {
    expect(fn.arr2bin([1, 2, '3', NaN])).toEqual('NaN')
  })
})

describe('UEFA EURO 2016', () => {
  it('應該返回正確的比賽結果字串', () => {
    expect(fn.uefaEuro2016(['Germany', 'Ukraine'], [2, 0])).toEqual(
      'At match Germany - Ukraine, Germany won!'
    )
    expect(fn.uefaEuro2016(['Belgium', 'Italy'], [0, 2])).toEqual(
      'At match Belgium - Italy, Italy won!'
    )
    expect(fn.uefaEuro2016(['Portugal', 'Iceland'], [1, 1])).toEqual(
      'At match Portugal - Iceland, teams played draw.'
    )
  })
})

describe('pick a set of first elements', () => {
  it('應該返回正確的結果', () => {
    expect(fn.first(['a', 'b', 'c', 'd', 'e'])).toEqual(['a'])
    expect(fn.first(['a', 'b', 'c', 'd', 'e'], 2)).toEqual(['a', 'b'])
    expect(fn.first(['a', 'b', 'c', 'd', 'e'], 3)).toEqual(['a', 'b', 'c'])
    expect(fn.first(['a', 'b', 'c', 'd', 'e'], 0)).toEqual([])
  })
})

describe('Find the Difference in Age between Oldest and Youngest Family Members', () => {
  it('應該返回正確的年齡差陣列', () => {
    expect(fn.differenceInAges([82, 15, 6, 38, 35])).toEqual([6, 82, 76])
    expect(fn.differenceInAges([57, 99, 14, 32])).toEqual([14, 99, 85])
    expect(fn.differenceInAges([5, 10, 15, 20, 25])).toEqual([5, 25, 20])
  })
})

describe('Sum of positive', () => {
  it('應該返回所有正數的總和', () => {
    expect(fn.positiveSum([1, -4, 7, 12])).toBe(20)
    expect(fn.positiveSum([-1, -4, -7])).toBe(0) // 沒有正數，應該返回 0
    expect(fn.positiveSum([])).toBe(0) // 空陣列，應該返回 0
    expect(fn.positiveSum([0, 0, 0])).toBe(0) // 沒有正數，應該返回 0
    expect(fn.positiveSum([1, 2, 3, 4, 5])).toBe(15) // 所有元素都是正數
  })
})

describe('Logical calculator', () => {
  it('應根據指定的邏輯運算符來計算結果', () => {
    expect(fn.logicalCalc([true, true, false], 'AND')).toBe(false)
    expect(fn.logicalCalc([true, true, false], 'OR')).toBe(true)
    expect(fn.logicalCalc([true, true, false], 'XOR')).toBe(false)
    expect(fn.logicalCalc([false, false, false], 'AND')).toBe(false)
    expect(fn.logicalCalc([true, true, true], 'OR')).toBe(true)
  })
})

describe('Remove First and Last Character Part Two', () => {
  it('應刪除第一個和最後一個序列並用空格分隔', () => {
    expect(fn.array('1,2,3')).toBe('2')
    expect(fn.array('1,2,3,4')).toBe('2 3')
    expect(fn.array('1,2,3,4,5')).toBe('2 3 4')
    // 測試空字串的情況
    expect(fn.array('')).toBeNull()
    // 測試只有一個序列的情況
    expect(fn.array('1')).toBeNull()
    // 測試只有兩個序列的情況
    expect(fn.array('1,2')).toBeNull()
  })
})

describe('Array Madness', () => {
  it('應該返回 true 如果 a 中每個元素的平方和大於 b 中每個元素的立方和', () => {
    expect(fn.arrayMadness([4, 5, 6], [1, 2, 3])).toBe(true)
    expect(fn.arrayMadness([1, 2, 3], [4, 5, 6])).toBe(false)
    expect(fn.arrayMadness([1, 2, 3, 4], [1, 2, 3])).toBe(false)
    expect(fn.arrayMadness([2, 3, 4], [1, 2, 3, 4])).toBe(false)
    expect(fn.arrayMadness([1, 2, 3], [3, 2, 1])).toBe(false)
  })
})

describe('How many stairs will Suzuki climb in 20 years?', () => {
  it('應計算 20 年內可能爬的階梯數', () => {
    const sunday = [
        6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940,
        8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859,
        6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602,
        5312, 7836, 8032, 9871, 5990, 6309, 7825,
      ],
      monday = [
        9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719, 6648, 8180, 7944,
        5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932, 7360, 9221, 5702, 5252, 7041, 7287,
        5185, 9139, 7187, 8855, 9310, 9105, 9769, 9679, 7842, 7466, 7321, 6785, 8770, 8108, 7985,
        5186, 9021, 9098, 6099, 5828, 7217, 9387,
      ],
      tuesday = [
        8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292, 7552, 5370, 7579,
        9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758, 8415, 7313, 7761, 9853, 7937, 9268,
        7888, 6589, 9366, 9867, 5093, 6684, 8793, 8116, 8493, 5265, 5815, 7191, 9515, 7825, 9508,
        6878, 7180, 8756, 5717, 7555, 9447, 7703,
      ],
      wednesday = [
        6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 5047, 6601, 8303, 9118,
        5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031, 8710, 5182, 9142, 9415, 9710, 7342,
        9425, 7927, 9030, 7742, 8394, 9652, 5783, 7698, 9492, 6973, 6531, 7698, 8994, 8058, 6406,
        5738, 7500, 8357, 7378, 9598, 5405, 9493,
      ],
      thursday = [
        6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197, 9866, 6609, 6308,
        7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752, 8695, 8402, 9638, 9925, 5508, 8636,
        5226, 9941, 8936, 5047, 6445, 8063, 6083, 7383, 7548, 5066, 7107, 6911, 9302, 5202, 7487,
        5593, 8620, 8858, 5360, 6638, 8012, 8701,
      ],
      friday = [
        5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589, 6362, 6200, 6781,
        8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473, 5663, 9501, 9177, 8384, 8229, 8781,
        9160, 6955, 9407, 7443, 8934, 8072, 8942, 6859, 5617, 5078, 8910, 6732, 9848, 8951, 9407,
        6699, 9842, 7455, 8720, 5725, 6960, 5127,
      ],
      saturday = [
        5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354, 8943, 5460, 9979,
        5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625, 7795, 7003, 5524, 9870, 6591, 8616,
        5163, 6656, 8150, 8826, 6875, 5242, 9585, 9649, 9838, 7150, 6567, 8524, 7613, 7809, 5562,
        7799, 7179, 5184, 7960, 9455, 5633, 9085,
      ]
    const stairsData = [sunday, monday, tuesday, wednesday, thursday, friday, saturday]
    expect(fn.stairsIn20(stairsData)).toBe(54636040)
  })
})

describe('Count the Monkeys!', () => {
  it('應生成包含從 1 到 n 的所有數字的陣列', () => {
    expect(fn.monkeyCount(10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(fn.monkeyCount(1)).toEqual([1])
    expect(fn.monkeyCount(5)).toEqual([1, 2, 3, 4, 5])
    expect(fn.monkeyCount(0)).toEqual([]) // 沒有猴子
  })
})

describe('Add Length', () => {
  it('應將每個單詞的長度添加到該單詞的末尾，並返回陣列', () => {
    expect(fn.addLength('apple ban')).toEqual(['apple 5', 'ban 3'])
    expect(fn.addLength('you will win')).toEqual(['you 3', 'will 4', 'win 3'])
    expect(fn.addLength('test')).toEqual(['test 4']) // 單詞只有一個
    expect(fn.addLength('hello world of code')).toEqual(['hello 5', 'world 5', 'of 2', 'code 4']) // 多個單詞
  })
})

describe('Cascading Subsets', () => {
  it('應返回大小為 n 的列表的級聯子集', () => {
    expect(fn.eachCons([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [2, 3],
      [3, 4],
    ])
    expect(fn.eachCons([1, 2, 3, 4], 3)).toEqual([
      [1, 2, 3],
      [2, 3, 4],
    ])
    expect(fn.eachCons([5, 6, 7, 8, 9], 2)).toEqual([
      [5, 6],
      [6, 7],
      [7, 8],
      [8, 9],
    ])
    expect(fn.eachCons([1, 2, 3, 4, 5, 6], 4)).toEqual([
      [1, 2, 3, 4],
      [2, 3, 4, 5],
      [3, 4, 5, 6],
    ])
    expect(fn.eachCons([], 3)).toEqual([])
  })
  it('如 n 小於 1 時，應返回空陣列', () => {
    expect(fn.eachCons([4, 9, 3], 0)).toEqual([])
  })
  it('如 n 大於陣列長度時，應返回空陣列', () => {
    expect(fn.eachCons([4, 9, 3], 4)).toEqual([])
  })
})

describe('Square(n) Sum', () => {
  it('應將每個數字平方後相加', () => {
    expect(fn.squareSum([1, 2, 2])).toBe(9)
    expect(fn.squareSum([3, 4, 5])).toBe(50)
    expect(fn.squareSum([0, 0, 0])).toBe(0) // 所有數字都是 0
    expect(fn.squareSum([2, 2, 2, 2])).toBe(16) // 多個相同的數字
  })
})

describe('A Needle in the Haystack', () => {
  it('應找到針並返回正確的消息', () => {
    expect(fn.findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])).toBe(
      'found the needle at position 5'
    )
    expect(fn.findNeedle(['one', 'two', 'three', 'needle'])).toBe('found the needle at position 3')
    expect(fn.findNeedle(['no', 'needle', 'here'])).toBe('found the needle at position 1')
    expect(fn.findNeedle(['not', 'in', 'this', 'array'])).toBe('needle not found')
  })
})

describe('Get the mean of an array', () => {
  it('應計算並返回平均成績', () => {
    expect(fn.getAverage([2, 2, 2, 2])).toBe(2)
    expect(fn.getAverage([1, 2, 3, 4, 5])).toBe(3)
    expect(fn.getAverage([1, 1, 1, 1, 1, 1, 1, 2])).toBe(1)
  })
  it('當平均成績有小數點時，應無條件捨去', () => {
    expect(fn.getAverage([85, 90, 92, 88, 78])).toBe(86)
  })
})

describe('Find numbers which are divisible by given number', () => {
  it('應返回所有可以被給定除數整除的數字', () => {
    expect(fn.divisibleBy([1, 2, 3, 4, 5, 6], 2)).toEqual([2, 4, 6])
    expect(fn.divisibleBy([10, 20, 30, 40, 50], 5)).toEqual([10, 20, 30, 40, 50]) // 所有數字都可以被 5 整除
    expect(fn.divisibleBy([7, 9, 13, 17, 21], 3)).toEqual([9, 21]) // 只有部分數字可以被 3 整除
    expect(fn.divisibleBy([1, 2, 3, 4, 5, 6], 7)).toEqual([]) // 沒有數字可以被 7 整除
  })
})

describe('Convert number to reversed array of digits', () => {
  it('應返回數字按相反順序排列在陣列中', () => {
    expect(fn.digitize(35231)).toEqual([1, 3, 2, 5, 3])
    expect(fn.digitize(0)).toEqual([0])
    expect(fn.digitize(12345)).toEqual([5, 4, 3, 2, 1])
    expect(fn.digitize(9876543210)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })
})

describe('Count by X', () => {
  it('應返回前 n 個 x 的倍數的陣列', () => {
    expect(fn.countBy(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    expect(fn.countBy(2, 5)).toEqual([2, 4, 6, 8, 10])
    expect(fn.countBy(3, 7)).toEqual([3, 6, 9, 12, 15, 18, 21])
    expect(fn.countBy(4, 3)).toEqual([4, 8, 12])
  })
})

describe('Enumerable Magic #1 - True for All?', () => {
  it('應根據函數返回值判斷是否全部符合條件', () => {
    expect(fn.all([1, 2, 3, 4, 5], v => v < 9)).toBe(true)
    expect(fn.all([1, 2, 3, 4, 5], v => v > 9)).toBe(false)
  })
})

describe('Birthday II - Presents', () => {
  it('應根據描述返回正確的結果', () => {
    expect(fn.present('goodpresent', 9)).toBe('pxxmy{n|nw}')
    expect(fn.present('crap', 10)).toBe('acpr')
    expect(fn.present('bang', 5)).toBe(388)
    expect(fn.present('badpresent', 3)).toBe('Take this back!')
    expect(fn.present('dog', 4)).toBe('pass out from excitement 4 times')
  })
})

describe('Holiday VII - Local Talk', () => {
  it('應將單詞之間插入 "pak"', () => {
    expect(fn.pak('Hello world')).toBe('Hello pak world')
    expect(fn.pak('How are you?')).toBe('How pak are pak you?')
    expect(fn.pak(' ')).toBe('')
  })
})

describe('Christmas baubles on the tree', () => {
  it('應返回每個樹枝上的綵球陣列', () => {
    expect(fn.baublesOnTree(10, 2)).toEqual([5, 5])
    expect(fn.baublesOnTree(5, 7)).toEqual([1, 1, 1, 1, 1, 0, 0])
    expect(fn.baublesOnTree(12, 5)).toEqual([3, 3, 2, 2, 2])
    expect(fn.baublesOnTree(0, 10)).toStrictEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
    expect(fn.baublesOnTree(5, 0)).toBe('Grandma, we will have to buy a Christmas tree first!')
  })
})

describe('Fifa 17 Launch', () => {
  it('應計算總獲獎金額', () => {
    expect(fn.fifa({ Home: '£75', Away: '£5000', Draw: '£1324' }, ['1-0', '2-3', '0-1'])).toBe(
      '£5075'
    )
  })
})

describe('Homogenous arrays', () => {
  it('應過濾符合條件的子陣列', () => {
    expect(fn.filterHomogenous([[1, 5, 4], ['a', 3, 5], ['b'], [], ['1', 2, 3]])).toEqual([
      [1, 5, 4],
      ['b'],
    ])

    expect(
      fn.filterHomogenous([[123, 234, 432], ['', 'abc'], [''], ['', 1], ['', '1'], []])
    ).toEqual([[123, 234, 432], ['', 'abc'], [''], ['', '1']])
  })
})

describe("Noye's Fludde", () => {
  it('應將動物成對排列並排除數字', () => {
    expect(fn.boatLoader(['g', 'c', 'h', 'c', 'g', 'm'])).toEqual([
      ['c', 'c'],
      ['g', 'g'],
    ])

    expect(
      fn.boatLoader([
        'a',
        'd',
        'G',
        'V',
        'X',
        'F',
        'g',
        'h',
        's',
        'r',
        'a',
        'g',
        'n',
        's',
        'e',
        'r',
        'j',
        'a',
        'f',
        'D',
        'F',
        'G',
        'R',
        'H',
        'C',
        'X',
        'B',
        'N',
        'G',
        'U',
        'G',
        'F',
        'p',
        's',
        'r',
        'g',
        'a',
      ])
    ).toEqual([
      ['a', 'a'],
      ['F', 'F'],
      ['G', 'G'],
      ['g', 'g'],
      ['r', 'r'],
      ['s', 's'],
      ['X', 'X'],
    ])

    expect(fn.boatLoader(['g', 'g', 'G', 'c', 'p', 'x', 'z', 'Z', 'G', 'c', 'g', 'g'])).toEqual([
      ['c', 'c'],
      ['G', 'G'],
      ['g', 'g'],
    ])

    expect(
      fn.boatLoader([5, 6, 5, 'g', 'g', 'G', 'c', 'p', 'x', 'z', 'Z', 'G', 'c', 'g', 'g'])
    ).toEqual([
      ['c', 'c'],
      ['G', 'G'],
      ['g', 'g'],
    ])
  })
})

describe('Numbers to Objects', () => {
  it('應返回對應的物件陣列', () => {
    expect(fn.numObj([118, 117, 120])).toEqual([{ 118: 'v' }, { 117: 'u' }, { 120: 'x' }])

    expect(fn.numObj([101, 121, 110, 113, 113, 103])).toEqual([
      { 101: 'e' },
      { 121: 'y' },
      { 110: 'n' },
      { 113: 'q' },
      { 113: 'q' },
      { 103: 'g' },
    ])
  })
})

describe('Likes Vs Dislikes', () => {
  it('應返回最終按鈕狀態', () => {
    expect(fn.likeOrDislike(['Dislike'])).toBe('Dislike')
    expect(fn.likeOrDislike(['Like', 'Like'])).toBe('Nothing')
    expect(fn.likeOrDislike(['Dislike', 'Like'])).toBe('Like')
    expect(fn.likeOrDislike(['Like', 'Dislike', 'Dislike'])).toBe('Nothing')
    expect(fn.likeOrDislike(['Dislike', 'Dislike'])).toBe('Nothing')
    expect(fn.likeOrDislike(['Like', 'Like', 'Like'])).toBe('Like')
    expect(fn.likeOrDislike(['Like', 'Dislike'])).toBe('Dislike')
    expect(fn.likeOrDislike(['Dislike', 'Like', 'Dislike'])).toBe('Dislike')
    expect(
      fn.likeOrDislike(['Like', 'Like', 'Dislike', 'Like', 'Like', 'Like', 'Like', 'Dislike'])
    ).toBe('Dislike')
    expect(fn.likeOrDislike([])).toBe('Nothing')
  })
})

describe('Alan Partridge I - Partridge Watch', () => {
  it('應返回相應的結果', () => {
    expect(fn.part(['Grouse', 'Partridge', 'Pheasant'])).toBe("Mine's a Pint!")
    expect(fn.part(['Pheasant', 'Goose', 'Starling', 'Robin'])).toBe(
      "Lynn, I've pierced my foot on a spike!!"
    )
    expect(
      fn.part([
        'Grouse',
        'Partridge',
        'Pheasant',
        'Goose',
        'Starling',
        'Robin',
        'Thrush',
        'Emu',
        'PearTree',
        'Chat',
        'Dan',
        'Square',
        'Toblerone',
        'Lynn',
        'AlphaPapa',
        'BMW',
        'Graham',
        'Tool',
        'Nomad',
        'Finger',
        'Hamster',
      ])
    ).toBe("Mine's a Pint!!!!!!!!")
  })
})

describe('Slaphead', () => {
  it('應返回替換後的頭部狀態和相應的評價', () => {
    expect(fn.bald('/---------')).toStrictEqual(['----------', 'Unicorn!'])
    expect(fn.bald('/-----/-')).toStrictEqual(['--------', 'Homer!'])
    expect(fn.bald('--/--/---/-/---')).toStrictEqual(['---------------', 'Careless!'])
  })
})

describe('Sum of two lowest positive integers', function () {
  it('應回傳陣列中最小的兩個正整數的和', function () {
    expect(fn.sumTwoSmallestNumbers([5, 8, 12, 19, 22])).toBe(13)
    expect(fn.sumTwoSmallestNumbers([15, 28, 4, 2, 43])).toBe(6)
    expect(fn.sumTwoSmallestNumbers([3, 87, 45, 12, 7])).toBe(10)
    expect(fn.sumTwoSmallestNumbers([23, 71, 33, 82, 1])).toBe(24)
    expect(fn.sumTwoSmallestNumbers([52, 76, 14, 12, 4])).toBe(16)
  })
})

describe('Birthday I - Cake', () => {
  it('應返回相應的結果', () => {
    expect(fn.cake(900, 'abcdef')).toBe('That was close!')
    expect(fn.cake(56, 'ifkhchlhfd')).toBe('Fire!')
    expect(fn.cake(256, 'aaaaaddddr')).toBe('Fire!')
  })
})

describe('Grid blast!', () => {
  it('應返回正確的戰場區域', () => {
    expect(fn.fire(0, 0)).toBe('top left')
    expect(fn.fire(1, 2)).toBe('bottom middle')
  })
})

describe('The Lazy Startup Office', () => {
  it('應返回正確的輪值名單', () => {
    expect(
      fn.binRota([
        ['Bob', 'Nora'],
        ['Ruby', 'Carl'],
      ])
    ).toStrictEqual(['Bob', 'Nora', 'Carl', 'Ruby'])
    expect(fn.binRota([['Billy']])).toStrictEqual(['Billy'])
    expect(fn.binRota([['Billy', 'Nancy']])).toStrictEqual(['Billy', 'Nancy'])
    expect(fn.binRota([['Billy'], ['Megan'], ['Aki'], ['Arun'], ['Joy']])).toStrictEqual([
      'Billy',
      'Megan',
      'Aki',
      'Arun',
      'Joy',
    ])
    expect(
      fn.binRota([
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
      fn.binRota([
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

describe('Insert dashes', () => {
  it('應返回正確的字串', () => {
    expect(fn.insertDash(454793)).toBe('4547-9-3')
    expect(fn.insertDash(123456)).toBe('123456')
    expect(fn.insertDash(1003567)).toBe('1003-567')
  })
})

describe('Tetris Series #1 — Scoring System', () => {
  const testing = (arr: number[], exp: number) =>
    it(`Testing for [${arr.join(', ')}]`, () => expect(fn.getScore(arr)).toBe(exp))
  testing([0, 1, 2, 3, 4], 1640)
  testing([0, 1, 1, 3, 0, 2, 1, 2], 620)
  testing([2, 0, 4, 2, 2, 3, 0, 0, 3, 3], 3300)
  testing([0], 0)
  testing([], 0)
  testing([2, 0, 1, 3, 1, 1, 3, 0, 0, 1], 900)
})

describe('Mysterious Singularity Numbers', function () {
  it('應返回正確的數字', function () {
    let arr = [
      [5, 1],
      [10, 2],
      [20, 6],
      [30, 8],
      [40, 10],
      [55, 15],
      [66, 17],
      [75, 20],
      [100, 26],
    ]
    for (let [n, expected] of arr) {
      let actual = fn.realNumbers(n)
      expect(actual).toBe(expected)
    }
  })
})

describe('Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?', () => {
  it('應返回正確的結果', () => {
    var list1 = [
      {
        firstName: 'Daniel',
        lastName: 'J.',
        country: 'Aruba',
        continent: 'Americas',
        age: 42,
        language: 'JavaScript',
      },
      {
        firstName: 'Kseniya',
        lastName: 'T.',
        country: 'Belarus',
        continent: 'Europe',
        age: 22,
        language: 'JavaScript',
      },
      {
        firstName: 'Hanna',
        lastName: 'L.',
        country: 'Hungary',
        continent: 'Europe',
        age: 65,
        language: 'JavaScript',
      },
    ]

    var list2 = [
      {
        firstName: 'Mariami',
        lastName: 'G.',
        country: 'Georgia',
        continent: 'Europe',
        age: 29,
        language: 'Python',
      },
      {
        firstName: 'Mia',
        lastName: 'H.',
        country: 'Germany',
        continent: 'Europe',
        age: 39,
        language: 'Ruby',
      },
      {
        firstName: 'Maria',
        lastName: 'I.',
        country: 'Greece',
        continent: 'Europe',
        age: 32,
        language: 'C',
      },
    ]

    expect(fn.isSameLanguage(list1)).toBe(true)
    expect(fn.isSameLanguage(list2)).toBe(false)
  })
})

describe('How fast can the burglar steal all the diamonds?', () => {
  it('Example 1', () => {
    expect(fn.diamondBurglar(['*.*.*.*.*.', '...*..**..', '**.**...*.', '**..**..**'])).toBe(13)
  })

  it('Example 2', () => {
    expect(fn.diamondBurglar(['..*.*.*...', '.**.*.*.**', '*........*'])).toBe(9)
  })

  it('Example 3', () => {
    expect(
      fn.diamondBurglar([
        '..*....*..',
        '....*.....',
        '*...**....',
        '..**....**',
        '..**..**.*',
        '.*.*.*.**.',
      ])
    ).toBe(14)
  })

  it('Example 4', () => {
    expect(fn.diamondBurglar(['.*...*...*', '..***..*..', '...**.*...', '.***.**..*'])).toBe(12)
  })

  it('Example 5', () => {
    expect(fn.diamondBurglar(['..****..*.', '..***.....', '.*..*...*.', '......**..'])).toBe(9)
  })
})

describe('Quadrants', () => {
  const tests = {
    Example: [
      [1, 2, 1],
      [3, 5, 1],
      [-10, 100, 2],
      [-1, -9, 3],
      [19, -56, 4],
    ],
  }
  for (var k of Object.keys(tests)) {
    it(k, () => {
      for (var t of tests[k as keyof typeof tests]) {
        expect(fn.quadrant(t[0], t[1])).toBe(t[2])
      }
    })
  }
})

describe('Check same case', function () {
  function doTest(a: string, b: string, expected: number) {
    it(`Testing for "${a}" and "${b}"`, function () {
      expect(fn.sameCase(a, b)).toBe(expected)
    })
  }
  doTest('C', 'B', 1)
  doTest('b', 'a', 1)
  doTest('d', 'd', 1)
  doTest('A', 's', 0)
  doTest('c', 'B', 0)
  doTest('b', 'Z', 0)
  doTest('\t', 'Z', -1)
  doTest('H', ':', -1)
})

describe('Quarter of the year', () => {
  it('應返回正確的值', () => {
    expect(fn.quarterOf(3)).toBe(1)
    expect(fn.quarterOf(8)).toBe(3)
    expect(fn.quarterOf(11)).toBe(4)
  })
})

describe('Closest elevator', function () {
  it("If the left elevator is closer to the call, should return 'left'", function () {
    expect(fn.elevator(0, 1, 0)).toBe('left')
  })
  it("If the right elevator is closer to the call, should return 'right'", function () {
    expect(fn.elevator(0, 1, 1)).toBe('right')
  })
  it("If the right elevator is closer to the call, should return 'right'", function () {
    expect(fn.elevator(0, 1, 2)).toBe('right')
  })
  it("If both elevators are on the same floor, should return 'right'", function () {
    expect(fn.elevator(0, 0, 0)).toBe('right')
  })
  it("If both elevators are in equal distance from the call, should return 'right'", function () {
    expect(fn.elevator(0, 2, 1)).toBe('right')
  })
})

describe('Pillars', function () {
  it('Testing for number of pillars: 1, distance: 10 m and width: 10 cm', function () {
    expect(fn.pillars(1, 10, 10)).toBe(0)
  })
  it('Testing for number of pillars: 2, distance: 20 m and width: 25 cm', function () {
    expect(fn.pillars(2, 20, 25)).toBe(2000)
  })
  it('Testing for number of pillars: 11, distance: 15 m and width: 30 cm', function () {
    expect(fn.pillars(11, 15, 30)).toBe(15270)
  })
})

describe('Twice as old', function () {
  it("Testing for dad's age: 36 and son's age: 7", function () {
    expect(fn.twiceAsOld(36, 7)).toBe(22)
  })
  it("Testing for dad's age: 55 and son's age: 30", function () {
    expect(fn.twiceAsOld(55, 30)).toBe(5)
  })
  it("Testing for dad's age: 42 and son's age: 21", function () {
    expect(fn.twiceAsOld(42, 21)).toBe(0)
  })
  it("Testing for dad's age: 22 and son's age: 1", function () {
    expect(fn.twiceAsOld(22, 1)).toBe(20)
  })
  it("Testing for dad's age: 29 and son's age: 0", function () {
    expect(fn.twiceAsOld(29, 0)).toBe(29)
  })
})

describe('Flick Switch', function () {
  it('應返回正確的值', function () {
    expect(fn.flickSwitch(['codewars', 'flick', 'code', 'wars'])).toEqual([
      true,
      false,
      false,
      false,
    ])
    expect(fn.flickSwitch(['flick', 'chocolate', 'adventure', 'sunshine'])).toEqual([
      false,
      false,
      false,
      false,
    ])
    expect(fn.flickSwitch(['bicycle', 'jarmony', 'flick', 'sheep', 'flick'])).toEqual([
      true,
      true,
      false,
      false,
      true,
    ])
    expect(fn.flickSwitch(['flick', 'flick', 'flick', 'flick', 'flick'])).toEqual([
      false,
      true,
      false,
      true,
      false,
    ])
    expect(fn.flickSwitch(['bicycle'])).toEqual([true])
    expect(fn.flickSwitch(['flick'])).toEqual([false])
    expect(fn.flickSwitch([])).toEqual([])
  })
})

describe('Draw stairs', function () {
  it('Draw stairs with only 1 step', () => {
    expect(fn.drawStairs(1)).toBe('I')
  })
  it('Draw stairs with 3 steps', () => {
    expect(fn.drawStairs(3)).toBe('I\n I\n  I')
  })
  it('Draw stairs with 5 steps', () => {
    expect(fn.drawStairs(5)).toBe('I\n I\n  I\n   I\n    I')
  })
})

describe('The Feast of Many Beasts', () => {
  it('應回傳正確的結果', () => {
    expect(fn.feast('great blue heron', 'garlic naan')).toBe(true)
    expect(fn.feast('chickadee', 'chocolate cake')).toBe(true)
    expect(fn.feast('brown bear', 'bear claw')).toBe(false)
  })
})

describe('Find Nearest square number', () => {
  it('應回傳正確的結果', () => {
    expect(fn.nearestSq(1)).toBe(1)
    expect(fn.nearestSq(2)).toBe(1)
    expect(fn.nearestSq(10)).toBe(9)
    expect(fn.nearestSq(111)).toBe(121)
    expect(fn.nearestSq(9999)).toBe(10000)
  })
})

describe('Cat years, Dog years', () => {
  it('應回傳人年、貓年、狗年的年齡', () => {
    expect(fn.humanYearsCatYearsDogYears(1)).toEqual([1, 15, 15])
    expect(fn.humanYearsCatYearsDogYears(2)).toEqual([2, 24, 24])
    expect(fn.humanYearsCatYearsDogYears(10)).toEqual([10, 56, 64])
  })
})

describe('Multiplication table for number', () => {
  it('應回傳指定數字的乘法表字串', () => {
    expect(fn.multiTable(5)).toBe(
      '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50'
    )
    expect(fn.multiTable(1)).toBe(
      '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10'
    )
  })
})
