function myFunc(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
myFunc(2, 3, 4, 5, 6, 7, 8);
// a and b holds the 1st 2 values and then ...c converts the remaining values into arrays and store it

function addNums(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total = total + number;
  }
  return total;
}
console.log(addNums(9, 8, 7, 6, 5, 4, 3, 2, 1));
