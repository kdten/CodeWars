// Get the mean of an array


// Instructions

// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.


// My Solution

const getAverage = (marks) => {
    let average = 0;
    for(let i=0;i<marks.length;i++) {
      average = average+marks[i]
    }
    average=average/marks.length
    return Math.floor(average);
  }
    
// Best Practice
    
function getAverage(marks){
    return Math.floor(marks.reduce((sum, x) => sum + x) / marks.length);
  }
  
const getAverage = marks => Math.floor(marks.reduce((a, b) => a + b) / marks.length);

function getAverage (marks) {
    return Math.floor(marks.reduce((a, b) => a + b, 0) / marks.length);
  }