// Primitive vs reference

// let num1 = 45;
// let num2 = num1;
// num1++;
// console.log(num2);
// console.log(num1);

// let arr1 = ["Hello", "how", "are", "you"];
// // console.log(typeof arr1);
// let arr2 = arr1;
// arr1.push("Himanish");
// console.log(arr1);
// console.log(arr2);

// Array Cloning methods
// Slice method
// let arr1 = ["Hello", "how", "are", "you"];
// let arr2 = arr1.slice(0);
// arr1.push("Himanish");
// console.log(arr2);

// Concat Method
// let arr2 = [].concat(arr1);
// console.log(arr2);

// Spread Operator
// let arr2 = [...arr1];
// console.log(arr2);

// Cloning and insertion of new values
// let arr2 = arr1.slice(0).concat(["Himanish", "All", "Good?"]);
// let arr2=[].concat(arr1,["Himanish","Good?"])
// let newArray = [1, 2, 3, 4];
// let arr2 = [
//   ...arr1,
//   ...newArray,
//   ...["Himanish", "Good?"],
//   ...["Doing", "Well?"],
// ];
// console.log(arr2);

// const person = { name: "Himanish", "roll number": 10, age: 21 };
// console.log(person);

// for (let key in person) {
//   console.log(`${key}:${person[key]}`);
// }
// console.log(Object.keys(person));
// for (let key of Object.keys(person)) {
//   console.log(`${key}:${person[key]}`);
// }

// Spread Operators
// const str = "1234567";
// let arr1 = [...str];
// console.log(arr1);

// const obj1 = { key1: "value1", key2: "value2" };
// const obj2 = { key1: "unique value", key3: "value3", key4: "value4" };
// const newObject = { ...obj1, ...obj2, key5: "value5" };
// console.log(newObject);

// const arr2 = ["Hello", "Himanish", "How", "are", "you?"];
// const myObj = { ...arr2 };
// console.log(myObj);
// const myObj3 = { ..."whjfgewjhfgjhwfgjwerhgfje4gw" };
// console.log(myObj3);

// for each
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number, index) => {
//   console.log(`${number} is at index ${index}`);
// });

// map
// const squareArray = numbers.map((number, index) => {
//   return `${number * number} is at ${index}`;
// });

// console.log(squareArray);

// // filter
// const num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const odd = num2.filter((num) => {
//   return num % 2 != 0;
// });
// console.log(odd);

// find method

// const arr = ["Lion", "Tiger", "Cat", "Dog", "Rabbit"];
// result = arr.find((string) => string.length == 3);
// console.log(result);

// every method
const arr = [2, 4, 6, 8, 10];
console.log(arr.every((number) => number % 2 === 0));