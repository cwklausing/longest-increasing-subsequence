// Finds the longest increasing subsequence for a string
// assumes the string is at least length 1, and includes only letters [a-z]
export const longestIncSubSeqString = (str) => {
  if(str.length === 1) {
    return 0
  }
  const arr = str.split('').map((letter) => ({
    value: letter.charCodeAt(0) - 96,
    lis: 1
  }))

  return longestIncSubSeq(arr)
}

const longestIncSubSeq = (arr) => {
  for(let i = 1; i < arr.length; i++) {
    for(let j = 0; j < i; j++) {
      if(arr[j].value <= arr[i].value) {
        let newLis = arr[j].lis + 1;
        if(newLis > arr[i].lis) {
          arr[i].lis = newLis
        }
      }
    }
  }

  const lisNum = arr.reduce((acc, item) => {
    return item.lis > acc ? acc = item.lis : acc
  }, 1)
  
  return arr.length - lisNum
}