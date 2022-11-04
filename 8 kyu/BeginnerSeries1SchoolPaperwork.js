// Beginner Series #1 School Paperwork


// Instructions

// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0
// Waiting for translations and Feedback! Thanks!


// My Solution

function past(h, m, s) {
    return (h * 3600 + m * 60 + s) * 1000;
    }

// Best Practice

const past = (h,m,s) => 1000 * (3600 * h + 60 * m + s);