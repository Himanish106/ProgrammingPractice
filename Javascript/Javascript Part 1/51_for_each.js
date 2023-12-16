// For each is an important method of arrays

const numbers = [4, 2, 5, 8];

// // Create a function and print all the numbers in the array along with the index
// function traverse(number, index) {
//   console.log(`${number} is at index ${index}`);
// }

// for (let i = 0; i < numbers.length; i++) {
//   traverse(numbers[i], i);
// }

// // But instead of doing all this we can simply do with the help of for each loop
// numbers.forEach(traverse); // So we are gettting the result. We do not need to pass seperately the parameters. It automatically gets passed. Like callback functions it also takes a function as an input.

// // You can also do like this
// numbers.forEach(function (number, index) {
//   console.log(`${number} is at index ${index}`);
// });

numbers.forEach((number, index) => {
  console.log(`${number} is at index ${index}`);
});

// Real life Example
const users = [
  { firstName: "harshit", age: 23 },
  { firstName: "mohit", age: 21 },
  { firstName: "nitish", age: 22 },
  { firstName: "garima", age: 20 },
];
users.forEach((value) => {
  console.log(value.firstName);
  console.log(value.age);
});
