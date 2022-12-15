// Remove exclamation marks


// Instructions

// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


// My Solution

function removeExclamationMarks(s) {
    return s.replace(/!/g, '');
  }

// Best Practice

function removeExclamationMarks(s) {
    return s.replace(/!/gi, '');
  }