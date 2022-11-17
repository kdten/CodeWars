//Calculate BMI

//Instructions

//Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"


//My Solution

function bmi(weight, height) {
    let bodyMass = (weight / Math.pow(height, 2))
    let msg = ""
    if (bodyMass <= 18.5) {
      msg = "Underweight";
    } else if (bodyMass <= 25) {
      msg = "Normal";
    } else if (bodyMass <= 30) {
      msg = "Overweight";
    } else {msg = "Obese"}
    return msg;
  }
    
//Best Practice
    
const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";


 function bmi(weight, height) {
    var result = weight/Math.pow(height,2) 
    
    if (result <= 18.5) {
      return "Underweight";
    } else if (result <= 25) {
      return "Normal";
    } else if (result <= 30) {
      return "Overweight";
    } else {
      return "Obese";
    }
    
  }