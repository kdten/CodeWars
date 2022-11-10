// Sum of differences in array



// Instructions

// Your task is to sum the differences between consecutive pairs in the array in descending order.

// Example
// [2, 1, 10]  -->  9
// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

// My Solution

function sumOfDifferences(arr) {
  let sum = 0;
  arr = arr.sort(function(a, b){return b-a});
  console.log(arr)
  if (arr.length == 1){
    return sum;
  } else if (arr.length == 2) {
    return (arr[0]-arr[1])
  } else
  for (let i=0;i<arr.length-1;i++) {
  sum+=(arr[i]-arr[i+1])
    console.log(sum)
  } 
  return sum;
}
  
// Best Practice
  
  function sumOfDifferences(arr) {
    return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}
  
const sumOfDifferences = arr => arr
  .sort((a, b) => b - a)
  .map((a, i) => a - arr[i + 1] || 0)
  .reduce((a, b) => a + b, 0);
