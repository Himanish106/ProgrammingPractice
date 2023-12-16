// One of the most important method of arrays. Nearly same as for each. map function usually returns an array.

const numbers = [3, 4, 1, 6, 8];
function square(number) {
  return number * number;
}

const squareArray = numbers.map(square);
console.log(squareArray);

const squareArray2 = numbers.map((number, index) => {
  return `${number * number} is at index ${index}`;
});
console.log(squareArray2);

// Real life example
const users = [
  { firstName: "harshit", age: 23 },
  { firstName: "mohit", age: 21 },
  { firstName: "nitish", age: 22 },
  { firstName: "garima", age: 20 },
];

const userNames = users.map((username) => {
  return username.firstName;
});
console.log(userNames);
