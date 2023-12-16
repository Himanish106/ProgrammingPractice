// objects reference type
// arrays are good but not sufficient
// for real world data
// objects store key value pairs
// objects don't have index

// Objects are just like dictionaries in python with minute differences

// how to create objects:-
const person = { myName: "Himanish", age: 21 };
console.log(person);

const person2 = {
  name: "harshit",
  age: 22,
  hobbies: ["guitar", "sleeping", "listening music"],
};
console.log(person);

// how to access data from objects
console.log(person2["name"]);
console.log(person2["age"]);
console.log(person2["hobbies"]);

// Or you can access in this way
console.log(person2.name);
console.log(person2.age);
console.log(person2.hobbies[1]);

// To add a key value pair
person2["phone number"] = 9073889463;
console.log(person2);

// Use . for single word strings. Use [] for multi word strings. But always try to use [] whatever be the case. 