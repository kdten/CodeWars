// Remove String Spaces

// Instructions

// Simple, remove the spaces from the string, then return the resultant string.

// My Solution

function noSpace(x){
  return x.split(' ').join('')
}

// Best Practice

function noSpace(x){
  return x.replace(/\s/g, '');
}
