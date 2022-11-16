//Convert boolean values to strings 'Yes' or 'No'.

//Instructions

//Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//My Solution

function boolToWord( bool ){
    if (bool) {
      return 'Yes';
    } else {
      return 'No';
    }
  }
  
  //Best Practice
  
  function boolToWord( bool ){
    return bool ? 'Yes':'No';
  }
  