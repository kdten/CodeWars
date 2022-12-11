// Convert a string to an array

// Instructions

// Write a function to split a string and convert it into an array of words.


// My Solution

function stringToArray(string){
    return string.trim().split(" ");
}
  
// Best Practice
  
function stringToArray(string){
    return string.split(' ');
}

const stringToArray = string => string.split(' ');

stringToArray=(s)=>s.split(' ')