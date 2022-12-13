// How many arguments


// Instructions

// args_count(1, 2, 3) -> 3
// args_count(1, 2, 3, 10) -> 4


// My Solution

const args_count = (...n) => n.length

// Best Practice

function args_count() {
    return arguments.length;
  }

const args_count = (...args) => args.length

function args_count(...args){
    return args.length
  }