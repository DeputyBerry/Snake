
// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0

function sameCase(a, b){
    const aLower = a.toLowerCase(),
          aUpper = a.toUpperCase(),
          bLower = b.toLowerCase(),
          bUpper = b.toUpperCase();
    if(aLower === aUpper || bLower === bUpper) return -1;
    if(aLower === a && bLower === b) return 1;
    if(aUpper === a && bUpper === b) return 1;
    return 0;
  }