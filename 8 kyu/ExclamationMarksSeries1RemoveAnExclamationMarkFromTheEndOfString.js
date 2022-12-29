// Even or Odd

// Instructions

// Description:
// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// Examples
// remove("Hi!") == "Hi"
// remove("Hi!!!") == "Hi!!"
// remove("!Hi") == "!Hi"
// remove("!Hi!") == "!Hi"
// remove("Hi! Hi!") == "Hi! Hi"
// remove("Hi") == "Hi"


// My Solution

function remove (string) {
    let a = string.split('')
    if (a[a.length-1] == '!') {
    let b = a.splice(-1,1)
    console.log(b)
    return a.join('')
    } else 
    return a.join('')
    }

// Best Practice

function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
  }