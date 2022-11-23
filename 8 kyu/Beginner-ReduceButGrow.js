// Beginner - Reduce but Grow

// Instructions

// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


// My Solution

function grow(x){
    const product = x.reduce((acc, c) => acc * c, 1);
      return product;
    }

// Best Practice

const grow=x=> x.reduce((a,b) => a*b);

const grow = (nums) => nums.reduce((product, num) => product * num, 1);

const grow = x => {
    let res = 1;
    for (let i = 0; i < x.length; i++) {
      res *= x[i];
    }
    return res;
  };

function grow(x){
    return x.reduce((a, b)=> a * b,1);
  }