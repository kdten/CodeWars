// Reverse words


// Instructions

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// My Solution

function reverseWords(str) {
    let arrStr = str.split(' ');
    for (let i=0;i<arrStr.length;i++) {
      arrStr[i] = arrStr[i].split('').reverse().join('');  
    }
   return arrStr.join(' ');
  }

// Best Practice

function reverseWords(str) {
    return str.split(' ').map(function(word){
      return word.split('').reverse().join('');
    }).join(' ');
  }
  