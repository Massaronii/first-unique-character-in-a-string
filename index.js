//vendo como funciona os for com {}, descobri que com o new Map é diferente

var firstUniqChar = function (s) {
 let resultChar = {}

 for(let i = 0; i < s.length; i++){
    resultChar[s[i]] = resultChar[s[i]] ? resultChar[s[i]] + 1 : 1
 }

 for(let j = 0; j < s.length; j++){
  if(resultChar[s[j]] === 1) {
     return j
  }
 }
 return -1
}


var firstUniqCharForOfFor = function (s) {
  let resultChar = {}

  for (let i of s) {
    resultChar[i] = resultChar[i] ? resultChar[i] + 1 : 1
  }

  for (let j = 0; j < s.length; j++) {
    if (resultChar[s[j]] === 1) {
      return j
    }
  }
  return -1
}


var firstUniqCharForInFor = function (s) {
  let resultChar = {}

  for (let i in s) {
    resultChar[s[i]] = resultChar[s[i]] ? resultChar[s[i]] + 1 : 1
  }

  for (let j = 0; j < s.length; j++) {
    if (resultChar[s[j]] === 1) {
      return j
    }
  }
  return -1
}


var firstUniqCharForIn = function (s) {
  let resultChar = {}

  for (let i in s) {
    resultChar[s[i]] = resultChar[s[i]] ? resultChar[s[i]] + 1 : 1
  }

  for (let j in s) {
    if (resultChar[s[j]] === 1) {
      return j
    }
  }
  return -1
}

console.log(firstUniqChar("leetcode"))
console.log(firstUniqChar("firstUniqChar"))
console.log(firstUniqChar("firstUniqCharforInfor"))
console.log(firstUniqCharForIn("leetcode"))
console.log(firstUniqCharForInFor("leetcode"))
