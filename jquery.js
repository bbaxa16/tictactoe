$(function(){ // window onload

//testing on click function
// $(".marker").click(function() {
//   alert("you did it bitch")
// })


$("#0").click(function() {
  $("#0").css("background-color", "yellow");
  checkFirstRow();
  checkSecondRow();
  checkThirdRow();

});

//For tic tac toe we need a way for it to know when someone won.
// When does someone win? When there are three of the same variables in a row.

// Let's create a function to test whether or not there are
// three of the same variable in the first row.

const checkFirstRow = function() {
  if ($("#0").children().html() === $("#1").children().html()&& $("#1").children().html() === $("#2").children().html()){
    console.log("Row 1: They are equal");
  } else {
    console.log("Row 1: They are not equal");
  }
}

const checkSecondRow = function() {
  if ($("#3").children().html(), $("#4").children().html(), $("#5").children().html() === "X"){
    console.log("Row 2: They all say X");
  } else {
    console.log("Row 2: They do not all say X");
  }
}

const checkThirdRow = function() {
  if ($("#6").children().html(), $("#7").children().html(), $("#8").children().html() === "X"){
    console.log("Row 3: They all say X");
  } else {
    console.log("Row 3: They do not all say X");
  }
}
// //testing it with just an array and not the DOM,
// I think an array might be the best way,
// if we can figure out how to assign each div or marker to an array.
const board = ["1","1","1",3,4,5,6,7,8];

//checks the first three spots in the array to see if they equal x

// const arrayChecktest = function() {
//   console.log("this is an array function");
//   if (board[0] === "x" && board[1] === "x" && board[2] === "x"){
//     console.log("poop");
//   } else {
//     console.log("double poop");
//   }
// }


//made a function that will check whether or not they are all true.
const arrayCheck = function() {
  if (board[0] === board[1] && board[1] === board[2]){
    console.log("poop");
  } else {
    console.log("double poop");
  }
}


arrayCheck();

}) //end of window onload
