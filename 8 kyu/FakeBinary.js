// Fake Binary


// Instructions

// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string


// My Solution

function fakeBin(x){
    x = x.split('')
      return x.map(y => (y>=5)?'1':'0').join('')
    }

// Best Practice

function fakeBin(x) {
    return x.split('').map(n => n < 5 ? 0 : 1).join('');
}
