function numberInput(number){
  let result = [];
  let numberArray = [1, 2, 3];
  let wordArray = ["beep", "boop", "won't you be my neighbor?"];
  
  for(let index = 0; index <= number; index ++) {
    if (index.toString().includes(numberArray[2])){
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

$(document).ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    let result = parseInt($("input#number").val());
    let number = numberInput(result);
    $("#result").text(number);
  })
}) 