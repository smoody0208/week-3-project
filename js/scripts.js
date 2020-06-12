function numberInput(number){
  let result = [];
  let numberArray = [1, 2, 3];
  let wordArray = ["beep", "boop", "won't you be my neighbor?"];

  for(let index = 0; index <= number.length; index ++) {
    if (index.includes(numberArray[2])){
    result.push(" " + wordArray[2]);
  } else if (index.includes(numberArray[1])) {
    result.push(" " + wordArray[1]);
  }
  
    }
  };

$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    let result = parseInt($("input#number").val());
    let number = numberInput(result);
    $("#result").text(number);
  })
})