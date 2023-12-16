// some method

const numbers = [3, 5, 11, 9];

// If any one number in the array is even then we obtain true. Just like any function in python
console.log(numbers.some((value) => value % 2 === 0)); // false

const numbers1 = [3, 5, 11, 9, 8];

// If any one number in the array is even then we obtain true. Just like any function in python
console.log(numbers1.some((value) => value % 2 === 0)); // true

const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 35000 },
  { productId: 3, productName: "macbook", price: 25000 },
];

// Check if any item in the userCart is greater than 100000
console.log(userCart.some((itemPrice) => itemPrice.price > 100000)); //false
// Check if any item in the userCart is greater than 30000
console.log(userCart.some((itemPrice) => itemPrice.price > 30000)); //true
