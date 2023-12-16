const singHappyBirthday = () => {
  console.log("Happy Birthday to you.......");
};
singHappyBirthday();

// const addTwoNum = (a, b) => {
//   return a + b;
// }; ---> Now when you use arrow functions if your program consists only 1 return statement and there are no other statements in your program then you can write like this

const addTwoNum = (a, b) => a + b;
console.log(addTwoNum(2, 3));

// Check even or not. Try with all 3 kinds of functions
//Function Declaration
function chkEven(n) {
  return n % 2 === 0;
}
console.log(chkEven(4));

// Function Expression
const chkEven2 = function (n) {
  return n % 2 === 0;
};
console.log(chkEven2(5));

//Arrow Function
const chkEven3 = (n) => n % 2 === 0;
console.log(chkEven3(6));
