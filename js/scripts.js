function numArray(num) {
  let numArr = []; 
  for (let i = 0; i <= num; i++) {
    numArr.push(i);
  }
  return numArr;
}

// now should loop the array on each ele then return words if it's 3,2,1 otherwise return that number

function beMyNeighbor(num) {
  const array = numArray(num).toString().split(",");
  const outcome = [];
  
  array.forEach(function(element) {
    if ( element.includes("3")) {
      outcome.push("Won't you be my neighbor?");
    } else if (element.includes("2")) {
      outcome.push("Boop!");
    } else if (element.includes("1")) {
      outcome.push("Beep!");
    } else {
      outcome.push(element);
    }
  });
  return outcome;
}


// function beMyNeighbor(num) {
//   const array = numArray(num);
//   console.log(array)
//   let outcome = new Array;

//   array.forEach(function(element) { 
//     if ( array.includes(3)) {
//       outcome.push("Won't you be my neighbor?");
//     } else if ( array.includes(2)) {
//       outcome.push("Boop!");
//     } else if ( array.includes(1)) {
//       outcome.push("Beep!");
//     } else {
//       outcome.push(element);
//     }
//   });
//   return outcome;
// }

// beMyNeighbor(5)


// function numToString(input) {
//   if (input === 3) {
//     return "Won't you be my neighbor?"
//   } else if (input === 2) {
//     return "Boop!"
//   } else if (input === 1) {
//     return "Beep!"
//   } else {
//     return input;
//   }
// }
