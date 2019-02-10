import { longestIncSubSeqString, longestIncSubSeq } from './lis'

const testStrings = [
  {
    input: 'floccinaucinihilipilification',
    expected: 17,
  },
  {
    input: 'psychophysicotherapeutics',
    expected: 18,
  },
  {
    input: 'abcdef',
    expected: 0
  },
  {
    input: 'abcabcdabdcefzzabczadc',
    expected: 11
  },
]

const testArrays = [
  {
    input: [10,4,7,18,38,2,18],
    expected: [4,7,18,38],
  },
  {
    input: [10,4,7,18,38,2,3,18,4,6,6,7,19,30],
    expected: [2,3,4,6,6,7,19,30],
  },
  {
    input: [10,12,16,4,10,18,3,12,3,8,45,65,6,17,9,30],
    expected: [10,12,16,18,45,65],
  },
  {
    input: [10,9,8,7,6,5,4,3,2,1],
    expected: [10]
  },
  {
    input: [10,9,8,7,6,5,4,3,2,1,9],
    expected: [9,9]
  },
]


describe('longestIncSubSeqString', () => {
  it('should return fewest number of letters needed to remove to create LIS', () => {
    testStrings.forEach((value) => {
      expect(longestIncSubSeqString(value.input)).toBe(value.expected)
    })
  })
})

describe('longestIncSubSeq', () => {
  it('should return array of longest increasing subsequence', () => {
    testArrays.forEach((value) => {
      expect(longestIncSubSeq(value.input)).toEqual(value.expected)
    })
  })
})