// let keyword
// declare a variable using let keyword

// We were declaring variables using var but generally we use let keyword. The reason of using let is block scope vs function scope which we will study later

var firstName = "Harshit";
var firstName = "Mohit";
console.log(firstName);

// let lastName='Das'
// let lastName='Dey'
// console.log(lastName) ---> Like var you cannot declare let twice on the same variable because let is a blovk scoped variable

let lastName = "Das";
lastName = "Dey";
console.log(lastName); // correct syntax
