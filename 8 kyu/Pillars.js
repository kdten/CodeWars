// Pillars


// Instructions

// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).


// My Solution

function pillars(numPill, dist, width) {
    dist=dist*100;
    if (numPill == 1) {
      return 0;
    } else if (numPill == 2) {
      return dist;
    } else return ((numPill-1)*dist)+((numPill-2)*width)
  }

// Best Practice
  
function pillars(num_pill, dist, width) {
    // your code here
    return num_pill>1?(num_pill-1)*dist*100+(num_pill-2)*width:0;
  }
    
function pillars(num_pill, dist, width) {
    return num_pill <= 1 ? 0 : (num_pill - 1) * dist * 100 + (num_pill - 2) * width;
  }

  const pillars = (n, d, w) => Math.max(0, n - 1) * (d * 100) + Math.max(0, n - 2) * w; 

