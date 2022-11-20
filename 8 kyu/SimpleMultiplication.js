// Simple multiplication


// Instructions

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.


// My Solution

function simpleMultiplication(n){
    return (n % 2 == 0) ? n * 8 : n * 9
  }

// Best Practice

const simpleMultiplication=n=>n*(n%2?9:8)


function simpleMultiplication(n){
    return n % 2 == 0 ? n * 8 : n * 9
  }