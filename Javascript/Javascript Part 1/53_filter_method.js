// Deals with boolean values and appends only those elements in the array which are true after certain conditions are performed

numbers = [1, 2, 4, 6, 5, 7, 8, 9];

function isEven(number) {
  return number % 2 === 0;
}

const evenArray = numbers.filter(isEven);
console.log(evenArray);

const oddArray = numbers.filter(function (number) {
  return number % 2 != 0;
});
console.log(oddArray);

const evarr = numbers.filter((number) => {
  return number % 2 == 0;
});
console.log(evarr);
