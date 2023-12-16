const numbers = [2, 4, 6, 8, 10];
console.log(numbers.every((value) => value % 2 === 0)); // true

// So lets see the working
// 2 ----> 2 % 2 === 0 --> true
// 4 ----> 4 % 2 === 0 --> true
// 6----> 6 % 2 === 0 --> true
// 8 ----> 8 % 2 === 0 --> true
// 10 ----> 10 % 2 === 0 --> true
// So as all the conditions are true hence the overall condition is true

const numbers1 = [2, 4, 6, 9, 10];
console.log(numbers1.every((value) => value % 2 === 0)); // false

// So lets see the working
// 2 ----> 2 % 2 === 0 --> true
// 4 ----> 4 % 2 === 0 --> true
// 6----> 6 % 2 === 0 --> true
// 9 ----> 9 % 2 === 0 --> false --> The iteration gets terminated here and gives the output as false

// This condition remains unchecked ---> 10 ----> 10 % 2 === 0 --> true

// Real Life Example
const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 35000 },
];
console.log(userCart.every((cartPrice) => cartPrice < 300000)); //false
