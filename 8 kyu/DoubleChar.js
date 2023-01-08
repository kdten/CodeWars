//Double Char


// Instructions

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!


// My Solution

function doubleChar(str) {
    let strArr = str.split('');
  for (let i=0;i<strArr.length;i++) {
    strArr[i] =  strArr[i] + strArr[i];
  }
    strArr = strArr.join('');
    return strArr
  }

// Best Practice

const doubleChar = (str) => str.split("").map(c => c + c).join("");
