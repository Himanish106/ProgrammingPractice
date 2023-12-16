// Another imp function of arrays

numbers = [2, 3, 4, 5, 6, 7, 8, 9];
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // Here 0 is the initial value of the accumulator
console.log(sum);

// accumulator          currentValue              returned value
//     0                    2                           2
//     2                    3                           5
//     5                    4                           9
//     9                    5                          14
//    14                    6                          20
//    20                    7                          27
//    27                    8                          35
//    35                    9                          44

const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "tv", price: 15000 },
];

const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
}, 0);
console.log(totalAmount);

// total price      currentValue.price    return
// 0                12000                 12000
// 12000            22000                 34000
// 34000            15000                 49000
