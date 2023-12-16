const person = {
  name: "harshit",
  age: 22,
  "person hobbies": ["guitar", "sleeping", "listening music"],
};

// To iterate objects we use these 2 methods
// for in loop
for (let key in person) {
  //   console.log(key);
  console.log(`${key}:${person[key]}`);
}
// Object.keys
console.log(Object.keys(person)); // So this is returning keys

for (let key of Object.keys(person)) {
  console.log(`${key}:${person[key]}`);
}
