// Get number from string


// Instructions

// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)


// My Solution

function getNumberFromString(s) {
    let result = "";
    for (let i = 0; i < s.length; i++) {
      if (!isNaN(parseInt(s[i]))) {
        result += s[i];
      }
    }
    return parseInt(result);
  }

// Best Practice


