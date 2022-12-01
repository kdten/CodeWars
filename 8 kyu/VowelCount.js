// Vowel Count

// Instructions

// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.


// My Solution

function getCount(str) {
    let vowelsCount = 0
    const vowels = ["a", "e", "i", "o", "u"]
    for(let char of str) {
        if(vowels.includes(char)) {
            vowelsCount++
        }
    }
  
    return vowelsCount;
  }

// Best Practice

function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }

  function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }

   function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
  }
