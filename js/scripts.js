let number;

function numberInput(number, name) {
  let result = [];
  let numberArray = [1, 2, 3];
  let wordArray = ["Beep", "Boop", "Won't you be my neighbor"];
  
  for (let index = 0; index <= number; index ++) {
    if (index % 3 === 0) {
      result.push(" " + wordArray[2] + ", " + name + "?" ) 
    } else if (index.toString().includes(numberArray[2])) {
      result.push(" " + wordArray[2]);
    } else if (index.toString().includes(numberArray[1])) {
      result.push(" " + wordArray[1]);
    } else if (index.toString().includes(numberArray[0])) {
      result.push(" " + wordArray[0])
    } else {
      result.push (" " + index);
    }
  }
  return result;
}

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    let result = parseInt($("input#number").val());
    let name = $("input#name").val();
    number = numberInput(result, name);
    $("#result").text(number);
    $(".card1").fadeIn();
    $("#btn").fadeIn();
  });
});

function reverseArray() {
  number.reverse();
  $("#reverseResult").text(number);
  $(".card2").fadeIn();
  $("#result").hide();
}