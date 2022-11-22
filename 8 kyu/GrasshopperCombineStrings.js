// Grasshopper - Combine strings


// Instructions

// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

// Example:

// combineNames('James', 'Stevens')
// returns:

// 'James Stevens'


// My Solution

const combineNames = (first, last) => (first + ' ' + last);

// Best Practice

const combineName = (...names) => names.join(' ');

const combinesNames = (a, b) => `${a} ${b}`;
