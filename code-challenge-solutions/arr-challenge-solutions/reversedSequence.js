// Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
    let reversedNums = []
    for(let i = n; i > 0; i--){
      reversedNums.push(i)
    }
    return reversedNums
  };