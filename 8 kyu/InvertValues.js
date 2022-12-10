// Invert values

// Instructions

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.


// My Solution

function invert(array) {
    let invert = [];
    for(let i = 0; i < array.length; i++){
      if(array[i] > 0){
        invert.push(array[i] - (array[i] * 2));
      }
      
      if(array[i] < 0){
        invert.push(Math.abs(array[i]));
      }
  
      if(array[i] == 0){
        invert.push(-0);
      }
    }
  
    return invert;
  }

// Best Practice

const invert = array => array.map(num => -num);

function invert(array) {
    var newArr = [];
    for(var i = 0; i < array.length; i++){
      newArr.push(-array[i]);
    }
     return newArr;
  }

  function invert(array) {
    return array.map(el => -el);
 }

