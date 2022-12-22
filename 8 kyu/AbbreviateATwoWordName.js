// Abbreviate a Two Word Name


// Instructions

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


// My Solution

function abbrevName(name){
    let names = name.split(' ');
      let fname =  names[0].substr(0,1);
      let lname = names[1].substr(0,1);
      return `${fname.toUpperCase()}.${lname.toUpperCase()}`
    }

// Best Practice

function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }

function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}
