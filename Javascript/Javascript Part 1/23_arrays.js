// intro to arrays
// reference type
// how to create arrays

// ordered collection of items

// let fruits = ["apple", "mango", "grapes"];
// let numbers = [1,2,3,4];
// let mixed = [1,2,2.3, "string", null, undefined];
// console.log(mixed);
// console.log(numbers);
// console.log(fruits[2]);
let fruits = ["apple", "mango", "grapes"];
console.log(typeof fruits); //object --> reference type in javascript is an object

// To check whether an object is an array or not
console.log(Array.isArray(fruits)); //true
objectLiteral = {}; //This is an object literal whose data type is also object. But to check whether this object is an array or not we can use this:-
console.log(Array.isArray(objectLiteral)); //false
