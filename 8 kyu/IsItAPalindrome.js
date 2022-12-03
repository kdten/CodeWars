// Is it a palindrome?

// Instructions

// Write a function that checks if a given string (case insensitive) is a palindrome.

// My Solution

function isPalindrome(x) {
    if( x.toLowerCase() === x.toLowerCase().split('').reverse().join('')){
      return true
    } else {
       return false
    }
  }
 

// Best Practice
  
const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }

const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();

const isPalindrome = x => x.toLowerCase() === x.toLowerCase().split('').reverse().join('');