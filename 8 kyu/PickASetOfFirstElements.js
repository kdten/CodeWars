// pick a set of first elements


// Instructions

// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// Examples
// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

// My Solution

function first(arr, n=1) {
    if(n == 0) {
      return [];
    } else {
      if (n > arr.length) {
        return arr;
      } else {
        let returnArr = [];
        for (let i=0; i<n; i++) {
          returnArr.push(arr[i])
        }
        return returnArr;
      }
    }
  }
 

// Best Practice
  
function first(arr, n=1) {
    return arr.slice(0,n);
 }

const first = (arr, n = 1) => arr.slice(0, n)