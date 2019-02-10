// Finds the longest increasing subsequence for a string
// assumes the string is at least length 1, and includes only letters [a-z]
export const longestIncSubSeqString = (str) => {
  if(str.length === 1) {
    return 0
  }
  const arr = str.split('').map((letter) => letter.charCodeAt(0) - 96)

  return str.length - longestIncSubSeq(arr).length
}

// arr: array of numbers
export const longestIncSubSeq = (initArray) => {
  const arr = initArray.map(number => ({
    value: number,
    lis: [number],
  }))

  for(let i = 1; i < arr.length; i++) {
    for(let j = 0; j < i; j++) {
      if(arr[j].value <= arr[i].value) {
        let newLis = [...arr[j].lis, arr[i].value]
        if(newLis.length > arr[i].lis.length) {
          arr[i].lis = newLis
        }
      }
    }
  }

  return arr.reduce((acc, item) => {
    return item.lis.length > acc.length ? acc = item.lis : acc
  }, [])
}
