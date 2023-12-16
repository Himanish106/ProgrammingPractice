// function even(number) {
//   if (number % 2 === 0) {
//     return `${number} is even`;
//   }
//   return `${number} is odd`;
// }
// let number = +prompt("Enter a number to check even or odd");
// console.log(even(number));

// Input a string and return the 1st character

// function firstIndexString(string) {
//   return string[0];
// }
// let myString = prompt("Enter a string to extract 1st character");
// console.log(firstIndexString(myString));

function searchVal(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return "Not Found";
}
console.log(searchVal([10, 11, 12, 13, 14, 15], 7));
