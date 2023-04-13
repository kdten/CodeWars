// Contamination #1 -String-


// Instructions

// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"


// My Solution

function contamination(text, char){
    let returnString;
    if (text == ''||char == '') {
      returnString = '';
    } else {
        returnString = char.repeat(text.length)
    }
    return returnString
  }

// Best Practice

function contamination(text, char){
    return char.repeat(text.length)
  }
