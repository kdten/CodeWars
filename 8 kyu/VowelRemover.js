// Vowel Remover


// Instructions

// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata


// My Solution

function shortcut (string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
    for (const char of string) {
      if (!vowels.includes(char)) {
        result += char;
      }
    }
  
    return result;
  }

// Best Practice

function shortcut(string){
    return string.replace(/[aeiou]/g,'')
  }

function shortcut(string){
    return string.replace(/[aeiou]/gi, '');
  }

function shortcut(str) {
    return str.split('').filter(function(e) {
      return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
    }).join('')
  }