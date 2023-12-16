// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol
// as key

// in maps you can use anything as key
// like array, number, string

// object literal
// key -> string
// key -> symbol

const person = {
  firstName: "harshit",
  age: 7,
  1: "one",
};
// By default every keys in a object is a string
for (let key in person) {
  console.log(key, typeof key);
}
// 1 string
// firstName string
// 28 age string

// Maps also have key and value pair
const person2 = new Map(); // Process of creating maps
// Now like objects we cannot use indexing here. To insert values we have a different process.
person2.set("firstName", "Harshit");
person2.set("age", 9);
person2.set(1, "one");
console.log(person2);
// Output:
// {'firstName' => 'Harshit', 'age' => 9, 1 => 'one'}
console.log(typeof person2); //object
// To get a value with the help of key we can use get method
console.log(person2.get("age")); //9
for (let key of person2.keys()) {
  console.log(key, typeof key);
  //   console.log(person2[key]) // undefined because in maps indexing is not possible;
  //   Output:
  //   firstName string
  //    age string
  //    1 'number'
  //   So here we can see maps can have the key of any data type while objects had keys of only string data type
}

for (let key of person2) {
  console.log(key);
  //   Output:
  //   ['firstName', 'Harshit']
  //   ['age', 9]
  //   [1, 'one']
  //   console.log(Array.isArray(key)); ---> true
  // So it is proved that the we are getting an array
  // Now let us understand this. When we were using objects there we were seeing that using this syntax we were getting only key value. But now here we get both key and value pair using the same syntax but in an array. But we can fetch both key and value in a different way
}

for (let [key, value] of person2) {
  console.log(key, value);
  //   So this is how we iterate a map object using the concept of array destructuring
  // The order of theoutput is guaranteed in maps but not guaranteed in objects
}

// Instead of using set you can also pass the key value pair like this

const person3 = new Map([
  ["firstName", "Himanish"],
  ["number", 1],
  [1, "Hello"],
]);
console.log(person3);

// Real life Example
const person1 = {
  id: 1,
  firstName: "harshit",
};
const person4 = {
  id: 2,
  firstName: "harshta",
};

// You have two store extrainfo about this two persons but in a seperate Map object

const extrainfo1 = new Map([[person1, { age: 8, gender: "male" }]]);
const extrainfo2 = new Map([[person4, { age: 10, gender: "female" }]]);
console.log(extrainfo1);
console.log(extrainfo2);
console.log(extrainfo1.get(person1).gender);
console.log(extrainfo2.get(person4).age);
