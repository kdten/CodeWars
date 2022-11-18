// Even or Odd

// Instructions

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.


// My Solution

function evenOrOdd(number) {
    return (number % 2 == 0) ? "Even" : "Odd";
  }
  
// Best Practice
  
function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }