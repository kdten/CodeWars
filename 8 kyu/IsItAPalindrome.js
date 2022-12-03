// Is it a palindrome?

// Instructions

// Write a function that checks if a given string (case insensitive) is a palindrome.

// My Solution

function oddOrEven(array) {
    let sum = 0;
 for(let i=0; i<array.length; i++)
  {
  sum += array[i];
  }
   
 if(sum%2==0) {
   return "even";
 }else if(sum == undefined) {
   return "odd";
 }else return "odd";
 }
 

// Best Practice
  
const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }

const isPalindrome = x => x.toLowerCase().split('').reverse().join('') == x.toLowerCase();

const isPalindrome = x => x.toLowerCase() === x.toLowerCase().split('').reverse().join('');