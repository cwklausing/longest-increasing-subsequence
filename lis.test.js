import { longestIncSubSeqString } from './lis'

const testData = [
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


describe('longestIncSubSeqString', () => {
  it('should return expected output', () => {
    testData.forEach((value) => {
      expect(longestIncSubSeqString(value.input)).toBe(value.expected)
    })
  })
})