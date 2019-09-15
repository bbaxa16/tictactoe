$(function(){ // window onload

console.log('hi this is my jquery page.');

//testing on click function
// $(".marker").click(function() {
//   alert("you did it bitch")
// })


$("#0").click(function() {
  $("#0").css("background-color", "yellow");
  checkFirstRow();

});

//For tic tac toe we need a way for it to know when someone won.
// When does someone win? When there are three of the same variables in a row.

// Let's create a function to test whether or not there are
// three of the same variable in the first row.

const checkFirstRow = function() {
  if ($("#0").children().html(), $("#1").children().html(), $("#2").children().html() === "X" ){
    console.log("They all say X");
  } else {
    console.log("They do not all say X");
  }
}

}) //end of window onload
