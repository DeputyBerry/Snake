// Given a non-empty array of integers, return the result of multiplying the values together in order. 

function grow(x){
    return x.reduce((acc,c) => acc * c)
  }