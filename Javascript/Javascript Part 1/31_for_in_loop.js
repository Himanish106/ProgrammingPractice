// for in loop gives us index 

const fruits = ["apple", "mango", "banana", "pear"];
const fruits2 = [];
for (let index in fruits) {
  fruits2.push(fruits[index]);
}
console.log(fruits2);
