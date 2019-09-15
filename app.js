// Each presidential candidate will be it's own object


//Elizabeth Warren object
const Warren = new Object();
Warren.firstname = "Elizabeth";
Warren.birthday = "6/22/1949";
Warren.age = 70;

//Joe Biden object
const Biden = new Object();
Biden.firstname = "Joe";
Biden.birthday = "11/20/1942";
Biden.age = 76;

//function to test who is older
function ageTest(x,y) {
  if (x > y) {
   console.log(Biden.firstname + " is older");
 } else {
   console.log(Warren.firstname + " is older");
 }
};

ageTest(Biden.age, Warren.age);

console.log(Warren.age > Biden.age);


//just leave these objects and functions alone above

//everything below is building tic tac toe.
//first we need to create the board a 3x3 so let's make that an array

const board = [0,1,2,3,4,5,6,7,8];

console.log(board[0]);

//if someone clicks on a position an x must appear.
