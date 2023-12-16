// array destructuring
const myArray = ["value 1", "value 2"];

// I am giving you a question to store the 2 elements in a seperate variable
// let myVal1 = myArray[0];
// let myVal2 = myArray[1];
// console.log(myVal1, myVal2);

// Instead of doing this you can do this using the concept of array destructuring
let [myVal1, myVal2] = myArray;
console.log(myVal1, myVal2);

// Special cases

// Case 1:
const myArray2 = ["value 1", "value 2", "value3", "value4"];
let [values1, values2] = myArray2; // Even though more elements are present in the array but only the first 2 values will get assigned to the 2 variables. This will not result to an error
console.log(values1, values2);

// Case 2:
const myArray3 = ["value 1", "value 2", "value3", "value4"];
let [val1, , val2] = myArray3; // Skips 1 value and produces result
console.log(val1, val2); //value 1 value3

// Case 3: You have to print the remaining elements which we had not stored in individual variables as a single array
const myArray4 = ["value 1", "value 2", "value3", "value4"];
// let [value1, value2] = myArray4;
// let myNewArray = myArray4.slice(2);
// console.log(value1, value2, myNewArray);
// Instead of doing this technique you could have done this same thing at the time of destructuring.

let [value1, value2, ...myNewArray] = myArray4;
console.log(value1, value2, myNewArray);