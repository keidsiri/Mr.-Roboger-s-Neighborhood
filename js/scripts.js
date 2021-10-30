//Business Logic
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

// UI logic

$(document).ready(function() {
  $("#number").submit(function(event) {
    event.preventDefault();
    const num = $("#input").val().replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g,"");
    const output = [];
    beMyNeighbor(num).forEach(function(element) {
      output.push(element);
    });
    // $("#output").text(output)
    $("ol").empty();
    output.forEach(function(items) {
      $("ol").append("<li>" + items + "</li>");
    });

  });
});

