// spread operator

const array1 = [1, 2, 3];
const array2 = [5, 6, 7];
const newArray = [...array1, ...array2];
console.log(newArray);

// Spread basically works on iterables such as arrays,strings etc
const str1 = "1234567";
const numArray = [...str1];

for (let index in numArray) {
  numArray[index] = +numArray[index];
}
console.log(numArray);

// spread operator in objects
const obj1 = {
  key1: "value1",
  key2: "value2",
};
const obj2 = {
  key1: "valueUnique",
  key3: "value3",
  key4: "value4",
};

const newObject = { ...obj1, ...obj2, key65: "value65" }; // No two same keys can be kept in an object the repeated key overrides the previous one.
console.log(newObject);

const newObject2 = { ...[12, 45, 67, "Hello"] };
console.log(newObject2); // {0: 12, 1: 45, 2: 67, 3: 'Hello'}

const newObject3 = { ..."wertygjksdfhkfbgbhfg" };
console.log(newObject3); // {0: 'w', 1: 'e', 2: 'r', 3: 't', 4: 'y', 5: 'g', 6: 'j', 7: 'k', 8: 's', 9: 'd', 10: 'f', 11: 'h', 12: 'k', 13: 'f', 14: 'b', 15: 'g', 16: 'b', 17: 'h', 18: 'f', 19: 'g'}
