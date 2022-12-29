// Century From Year


// Instructions

// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// My Solution

function century(year) {
    if (year%100 == 0) {
      return parseInt(year / 100)
    } else{
    return parseInt(year / 100) + 1 
    }
  }

// Best Practice
  
const century = year => Math.ceil(year/100)

